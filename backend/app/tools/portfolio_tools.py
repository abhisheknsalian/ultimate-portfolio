from typing import Optional


def scroll_to(section: str):
    return {
        "type": "OPEN_SECTION",
        "target": section,
    }


def highlight_project(slug: str):
    return {
        "type": "HIGHLIGHT_PROJECT",
        "target": slug,
    }


def open_resume():
    return {
        "type": "VIEW_RESUME",
    }


def open_github():
    return {
        "type": "OPEN_GITHUB",
    }


def open_linkedin():
    return {
        "type": "OPEN_LINKEDIN",
    }


def open_contact():
    return {
        "type": "OPEN_CONTACT",
    }