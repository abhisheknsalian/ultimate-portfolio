from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

from app.ingestion.loader import load_documents


def chunk_documents():
    """
    Load markdown documents and split them into semantic chunks.
    """

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=800,
        chunk_overlap=150,
        separators=[
            "\n# ",
            "\n## ",
            "\n### ",
            "\n\n",
            "\n",
            " ",
            "",
        ],
    )

    docs = load_documents()

    chunks = []

    for doc in docs:

        pieces = splitter.split_text(doc["content"])

        for index, piece in enumerate(pieces):

            chunks.append(
                Document(
                    page_content=piece,
                    metadata={
                        **doc["metadata"],
                        "chunk": index,
                    },
                )
            )

    return chunks


if __name__ == "__main__":

    chunks = chunk_documents()

    print(f"\nCreated {len(chunks)} chunks\n")

    print("=" * 80)

    print(chunks[0].metadata)

    print()

    print(chunks[0].page_content[:600])