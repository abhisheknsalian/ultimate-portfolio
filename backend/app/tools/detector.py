from app.tools.actions import (
    ActionType,
    AssistantAction,
)

# Keyword -> ActionType matching is unchanged from before language support:
# same keywords, same order, same triggering behavior. Only the label text
# shown for a detected action now depends on the selected UI language.
TOOLS = [
    (["resume", "cv"], ActionType.VIEW_RESUME),
    (["github"], ActionType.OPEN_GITHUB),
    (["linkedin"], ActionType.OPEN_LINKEDIN),
    (["portfolio", "website"], ActionType.OPEN_PORTFOLIO),
    (["email", "contact"], ActionType.OPEN_EMAIL),
    (["experience"], ActionType.OPEN_EXPERIENCE),
]

LABELS = {
    "en": {
        ActionType.VIEW_RESUME: "View Resume",
        ActionType.OPEN_GITHUB: "Open GitHub",
        ActionType.OPEN_LINKEDIN: "Open LinkedIn",
        ActionType.OPEN_PORTFOLIO: "Open Portfolio",
        ActionType.OPEN_EMAIL: "Email Me",
        ActionType.OPEN_EXPERIENCE: "View Experience",
    },
    "de": {
        ActionType.VIEW_RESUME: "Lebenslauf ansehen",
        ActionType.OPEN_GITHUB: "GitHub öffnen",
        ActionType.OPEN_LINKEDIN: "LinkedIn öffnen",
        ActionType.OPEN_PORTFOLIO: "Portfolio öffnen",
        ActionType.OPEN_EMAIL: "E-Mail senden",
        ActionType.OPEN_EXPERIENCE: "Erfahrung ansehen",
    },
}


def detect_action(
    message: str,
    language: str = "en",
) -> AssistantAction | None:
    text = message.lower()
    labels = LABELS.get(language, LABELS["en"])

    for keywords, action_type in TOOLS:
        if any(keyword in text for keyword in keywords):
            return AssistantAction(
                type=action_type,
                label=labels[action_type],
            )

    return None