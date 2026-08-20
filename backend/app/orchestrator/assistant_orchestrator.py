from collections.abc import AsyncGenerator

from app.prompts.prompt_builder import build_prompt
from app.providers.factory import get_provider
from app.retriever.retriever import get_retriever
from app.schemas.chat import ChatMessage
from app.tools.actions import ActionType, AssistantAction
from app.tools.detector import detect_action

# The "Featured Project" quick action (and any similarly-phrased question -
# see frontend/components/home/hero/assistant/constants/quick-actions.ts)
# asks about the flagship project loosely. Two independent problems come
# from that:
#
# 1. Plain semantic search on a phrase like "best project" is ambiguous on
#    this small knowledge base - several docs are marked featured, and it
#    was matching the flood-prediction research project instead of the
#    actual flagship project.
# 2. The action button was picked by detect_action() scanning the
#    *generated answer's prose* for keywords - the flagship project's own
#    description routinely contains the word "experience" (e.g. "hands-on
#    experience with production-grade AI workflows"), which false-matched
#    the OPEN_EXPERIENCE action regardless of what was actually asked.
#
# Both are fixed the same way: recognize the featured-project *question*
# up front (from the user's message, not the AI's answer) and use that one
# signal both to redirect retrieval to a query naming the flagship project
# directly, and to attach the project action directly - bypassing the
# prose-keyword scan for this case entirely. The user-facing question
# passed to the LLM is left unchanged, so this only changes which context
# is retrieved and which action is attached, not what the assistant is
# asked or how it answers. Every other action (GitHub, LinkedIn, email,
# experience, ...) still goes through detect_action() exactly as before.
FEATURED_PROJECT_TRIGGER_WORDS = ("featured", "flagship", "best")
FEATURED_PROJECT_TOPIC_WORDS = ("project", "projekt")

FEATURED_PROJECT_RETRIEVAL_QUERY = (
    "AI-Powered Cyber Threat Intelligence Platform flagship project"
)

# Sourced from the same project record already used elsewhere in the
# portfolio (frontend/data/projects.ts, knowledge/knowledge.json) - not
# invented here.
FEATURED_PROJECT_GITHUB_URL = (
    "https://github.com/abhisheknsalian/cyber-ai-platform"
)

FEATURED_PROJECT_ACTION_LABELS = {
    "en": "View Project",
    "de": "Projekt ansehen",
}


def _is_featured_project_query(message: str) -> bool:
    text = message.strip().lower()

    has_trigger = any(
        word in text for word in FEATURED_PROJECT_TRIGGER_WORDS
    )
    has_topic = any(
        word in text for word in FEATURED_PROJECT_TOPIC_WORDS
    )

    return has_trigger and has_topic


def _resolve_retrieval_query(message: str) -> str:
    if _is_featured_project_query(message):
        return FEATURED_PROJECT_RETRIEVAL_QUERY

    return message


def _resolve_action(
    message: str,
    response: str,
    language: str,
) -> AssistantAction | None:
    if _is_featured_project_query(message):
        label = FEATURED_PROJECT_ACTION_LABELS.get(
            language, FEATURED_PROJECT_ACTION_LABELS["en"]
        )

        return AssistantAction(
            type=ActionType.OPEN_PROJECT,
            label=label,
            payload=FEATURED_PROJECT_GITHUB_URL,
        )

    return detect_action(response, language)


class AssistantOrchestrator:
    """
    Central AI orchestration layer.

    Responsibilities:

    - Retrieve relevant portfolio knowledge
    - Build prompts
    - Call the AI provider
    - Detect UI actions
    - Stream responses
    """

    def __init__(self):
        self.provider = get_provider()
        self.retriever = get_retriever()

    async def chat(
        self,
        message: str,
        history: list[ChatMessage],
        language: str = "en",
    ) -> tuple[str, AssistantAction | None]:

        documents = self.retriever.invoke(_resolve_retrieval_query(message))

        prompt = build_prompt(
            question=message,
            documents=documents,
            language=language,
        )

        response = await self.provider.generate(
            prompt,
            history,
            language,
        )

        action = _resolve_action(message, response, language)

        return response, action

    async def stream(
        self,
        message: str,
        history: list[ChatMessage],
        language: str = "en",
    ) -> AsyncGenerator[str, None]:

        documents = self.retriever.invoke(_resolve_retrieval_query(message))

        prompt = build_prompt(
            question=message,
            documents=documents,
            language=language,
        )

        full_response = ""

        async for chunk in self.provider.stream_generate(
            prompt,
            history,
            language,
        ):
            full_response += chunk

            yield "event: token\n"
            yield f"data: {chunk}\n\n"

        action = _resolve_action(message, full_response, language)

        if action:
            yield "event: action\n"
            yield f"data: {action.model_dump_json()}\n\n"

        yield "event: done\n"
        yield "data: complete\n\n"