from typing import Any

from pydantic import BaseModel


class ToolCall(BaseModel):
    """
    Represents a tool requested by the LLM.
    """

    name: str
    arguments: dict[str, Any]


class ToolResult(BaseModel):
    """
    Result returned after executing a tool.
    """

    success: bool = True

    output: dict[str, Any]