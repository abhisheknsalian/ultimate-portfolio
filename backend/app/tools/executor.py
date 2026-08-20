from app.tools.registry import TOOLS
from app.tools.schemas import ToolResult


def execute_tool(
    name: str,
    arguments: dict | None = None,
) -> ToolResult:
    """
    Executes a registered tool.
    """

    if arguments is None:
        arguments = {}

    tool = TOOLS.get(name)

    if tool is None:
        return ToolResult(
            success=False,
            output={
                "error": f"Unknown tool '{name}'"
            },
        )

    return tool(**arguments)