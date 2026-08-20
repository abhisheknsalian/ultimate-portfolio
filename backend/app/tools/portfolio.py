from app.tools.schemas import ToolResult


def open_github() -> ToolResult:
    return ToolResult(
        output={
            "type": "OPEN_GITHUB"
        }
    )


def open_linkedin() -> ToolResult:
    return ToolResult(
        output={
            "type": "OPEN_LINKEDIN"
        }
    )


def open_resume() -> ToolResult:
    return ToolResult(
        output={
            "type": "VIEW_RESUME"
        }
    )


def open_contact() -> ToolResult:
    return ToolResult(
        output={
            "type": "OPEN_CONTACT"
        }
    )


def open_projects() -> ToolResult:
    return ToolResult(
        output={
            "type": "OPEN_PROJECTS"
        }
    )


def open_experience() -> ToolResult:
    return ToolResult(
        output={
            "type": "OPEN_EXPERIENCE"
        }
    )


def open_education() -> ToolResult:
    return ToolResult(
        output={
            "type": "OPEN_EDUCATION"
        }
    )