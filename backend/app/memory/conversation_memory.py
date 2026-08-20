from collections import deque

from app.schemas.chat import ChatMessage


class ConversationMemory:
    """
    Stores the recent conversation history.

    This memory layer is intentionally lightweight.
    It can later be replaced with Redis, a database,
    or a vector memory store without changing the
    rest of the application.
    """

    def __init__(self, max_messages: int = 20):
        self.max_messages = max_messages
        self._messages: deque[ChatMessage] = deque(
            maxlen=max_messages
        )

    def add(
        self,
        message: ChatMessage,
    ) -> None:
        self._messages.append(message)

    def extend(
        self,
        messages: list[ChatMessage],
    ) -> None:
        self._messages.clear()

        for message in messages:
            self._messages.append(message)

    def get(self) -> list[ChatMessage]:
        return list(self._messages)

    def clear(self) -> None:
        self._messages.clear()