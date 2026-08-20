from pathlib import Path
import yaml


DATA_DIR = Path("app/data")


def load_documents():
    """
    Load every markdown document inside app/data recursively.
    Returns a list of dictionaries.
    """

    documents = []

    for file in DATA_DIR.rglob("*.md"):

        text = file.read_text(encoding="utf-8")

        metadata = {}

        # Parse YAML front matter
        if text.startswith("---"):
            _, frontmatter, content = text.split("---", 2)
            metadata = yaml.safe_load(frontmatter) or {}
            text = content.strip()

        documents.append(
            {
                "content": text,
                "metadata": {
                    **metadata,
                    "source": str(file),
                    "filename": file.name,
                },
            }
        )

    return documents


if __name__ == "__main__":

    docs = load_documents()

    print(f"\nLoaded {len(docs)} documents\n")

    for doc in docs:
        print("=" * 80)
        print(doc["metadata"]["filename"])
        print(doc["metadata"])