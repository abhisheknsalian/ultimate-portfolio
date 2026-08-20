from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.chat import router as chat_router
from app.core.config import settings

app = FastAPI(
    title="Abhishek Portfolio AI",
    version="1.0.0",
    description="AI backend for my portfolio assistant.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)


@app.get("/")
async def root():
    return {
        "message": "Portfolio AI Backend Running 🚀",
        "status": "healthy",
    }


@app.get("/health")
async def health():
    return {
        "status": "ok",
    }