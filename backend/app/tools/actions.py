from enum import Enum

from pydantic import BaseModel


class ActionType(str, Enum):
    VIEW_RESUME = "VIEW_RESUME"
    DOWNLOAD_RESUME = "DOWNLOAD_RESUME"

    OPEN_GITHUB = "OPEN_GITHUB"
    OPEN_LINKEDIN = "OPEN_LINKEDIN"
    OPEN_PORTFOLIO = "OPEN_PORTFOLIO"

    OPEN_EMAIL = "OPEN_EMAIL"

    OPEN_PROJECT = "OPEN_PROJECT"

    OPEN_EXPERIENCE = "OPEN_EXPERIENCE"
    OPEN_CONTACT = "OPEN_CONTACT"


class AssistantAction(BaseModel):
    type: ActionType
    label: str
    payload: str | None = None