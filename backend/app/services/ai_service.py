from collections.abc import AsyncGenerator

from app.orchestrator.assistant_orchestrator import (
    AssistantOrchestrator,
)
from app.schemas.chat import ChatMessage
from app.tools.actions import AssistantAction

orchestrator = AssistantOrchestrator()


async def generate_response(
    message: str,
    history: list[ChatMessage],
    language: str = "en",
) -> tuple[str, AssistantAction | None]:
    """
    Standard AI response.
    """

    return await orchestrator.chat(
        message,
        history,
        language,
    )


async def stream_response(
    message: str,
    history: list[ChatMessage],
    language: str = "en",
) -> AsyncGenerator[str, None]:
    """
    Streaming AI response.
    """

    async for event in orchestrator.stream(
        message,
        history,
        language,
    ):
        yield event