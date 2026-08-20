from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    AI_PROVIDER: str = os.getenv("AI_PROVIDER", "groq")

    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")

    GROQ_MODEL: str = os.getenv(
        "GROQ_MODEL",
        "llama-3.3-70b-versatile",
    )

    ALLOWED_ORIGINS: list[str] = [
        origin.strip()
        for origin in os.getenv(
            "ALLOWED_ORIGINS", "http://localhost:3000"
        ).split(",")
        if origin.strip()
    ]


settings = Settings()