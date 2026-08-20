from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.ai_service import (
    generate_response,
    stream_response,
)

router = APIRouter(
    prefix="/api/chat",
    tags=["Chat"],
)


@router.post("", response_model=ChatResponse)
async def chat(request: ChatRequest):

    response, action = await generate_response(
        request.message,
        request.history,
        request.language,
    )

    return ChatResponse(
        response=response,
        action=action,
    )


@router.post("/stream")
async def chat_stream(request: ChatRequest):

    return StreamingResponse(
        stream_response(
            request.message,
            request.history,
            request.language,
        ),
        media_type="text/event-stream",
    )