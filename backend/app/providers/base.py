from abc import ABC, abstractmethod
from collections.abc import AsyncGenerator

from app.schemas.chat import ChatMessage


class BaseAIProvider(ABC):
    @abstractmethod
    async def generate(
        self,
        message: str,
        history: list[ChatMessage],
        language: str,
    ) -> str:
        """
        Generate a complete response.
        """
        pass

    @abstractmethod
    async def stream_generate(
        self,
        message: str,
        history: list[ChatMessage],
        language: str,
    ) -> AsyncGenerator[str, None]:
        """
        Stream the response token by token.
        """
        pass