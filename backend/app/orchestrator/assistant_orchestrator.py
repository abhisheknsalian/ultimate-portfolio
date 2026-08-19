from collections.abc import AsyncGenerator

from app.prompts.prompt_builder import build_prompt
from app.providers.factory import get_provider
from app.retriever.retriever import get_retriever
from app.schemas.chat import ChatMessage
from app.tools.actions import AssistantAction
from app.tools.detector import detect_action


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

        documents = self.retriever.invoke(message)

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

        action = detect_action(response, language)

        return response, action

    async def stream(
        self,
        message: str,
        history: list[ChatMessage],
        language: str = "en",
    ) -> AsyncGenerator[str, None]:

        documents = self.retriever.invoke(message)

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

        action = detect_action(full_response, language)

        if action:
            yield "event: action\n"
            yield f"data: {action.model_dump_json()}\n\n"

        yield "event: done\n"
        yield "data: complete\n\n"