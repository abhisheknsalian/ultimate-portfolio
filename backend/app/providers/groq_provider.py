from collections.abc import AsyncGenerator

from groq import Groq

from app.core.config import settings
from app.prompts.system_prompt import SYSTEM_PROMPT, get_language_directive
from app.providers.base import BaseAIProvider
from app.schemas.chat import ChatMessage


class GroqProvider(BaseAIProvider):
    def __init__(self):
        self.client = Groq(
            api_key=settings.GROQ_API_KEY,
        )

    def _build_messages(
        self,
        message: str,
        history: list[ChatMessage],
        language: str,
    ):
        messages = [
            {
                "role": "system",
                "content": f"{SYSTEM_PROMPT}\n\n{get_language_directive(language)}",
            }
        ]

        for chat in history:
            messages.append(
                {
                    "role": chat.role,
                    "content": chat.content,
                }
            )

        messages.append(
            {
                "role": "user",
                "content": message,
            }
        )

        return messages

    async def generate(
        self,
        message: str,
        history: list[ChatMessage],
        language: str,
    ) -> str:

        response = self.client.chat.completions.create(
            model=settings.GROQ_MODEL,
            messages=self._build_messages(message, history, language),
            temperature=0.7,
        )

        return response.choices[0].message.content or ""

    async def stream_generate(
        self,
        message: str,
        history: list[ChatMessage],
        language: str,
    ) -> AsyncGenerator[str, None]:

        stream = self.client.chat.completions.create(
            model=settings.GROQ_MODEL,
            messages=self._build_messages(message, history, language),
            temperature=0.7,
            stream=True,
        )

        for chunk in stream:
            if not chunk.choices:
                continue

            delta = chunk.choices[0].delta.content

            if delta:
                yield delta