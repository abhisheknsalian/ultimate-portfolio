from app.schemas.chat import AssistantAction

RULES = [
    (
        ["github", "repository", "repo"],
        AssistantAction(
            type="OPEN_GITHUB",
            label="Open GitHub",
        ),
    ),
    (
        ["linkedin"],
        AssistantAction(
            type="OPEN_LINKEDIN",
            label="Open LinkedIn",
        ),
    ),
    (
        ["resume", "cv"],
        AssistantAction(
            type="VIEW_RESUME",
            label="View Resume",
        ),
    ),
    (
        ["download resume", "download cv"],
        AssistantAction(
            type="DOWNLOAD_RESUME",
            label="Download Resume",
        ),
    ),
    (
        ["experience", "work experience"],
        AssistantAction(
            type="OPEN_EXPERIENCE",
            label="View Experience",
        ),
    ),
    (
        ["education", "university", "study"],
        AssistantAction(
            type="OPEN_EDUCATION",
            label="Education",
        ),
    ),
    (
        ["certificate", "certification", "certificates"],
        AssistantAction(
            type="OPEN_CERTIFICATIONS",
            label="View Certifications",
        ),
    ),
    (
        ["project", "projects"],
        AssistantAction(
            type="OPEN_PROJECTS",
            label="View Projects",
        ),
    ),
    (
        ["featured project"],
        AssistantAction(
            type="OPEN_FEATURED_PROJECT",
            label="Featured Project",
        ),
    ),
    (
        ["contact", "hire", "email"],
        AssistantAction(
            type="OPEN_CONTACT",
            label="Contact Me",
        ),
    ),
]


def resolve_action(message: str):
    text = message.lower()

    for keywords, action in RULES:
        if any(keyword in text for keyword in keywords):
            return action

    return None