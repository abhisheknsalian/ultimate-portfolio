from app.core.config import settings
from app.providers.base import BaseAIProvider
from app.providers.groq_provider import GroqProvider


def get_provider() -> BaseAIProvider:
    if settings.AI_PROVIDER.lower() == "groq":
        return GroqProvider()

    raise ValueError(
        f"Unsupported AI provider: {settings.AI_PROVIDER}"
    )