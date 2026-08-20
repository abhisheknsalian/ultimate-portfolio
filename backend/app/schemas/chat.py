from pydantic import BaseModel

from app.tools.actions import AssistantAction


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: list[ChatMessage]

    # NEW
    language: str = "en"


class ChatResponse(BaseModel):
    response: str
    action: AssistantAction | None = None