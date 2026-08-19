import shutil
from pathlib import Path

from langchain_chroma import Chroma

from app.ingestion.chunker import chunk_documents
from app.vectordb.embeddings import get_embedding_model


VECTOR_DB_PATH = Path("app/vectordb/chroma")


def build_vector_store():
    """
    Build the Chroma vector database from all portfolio documents.
    """

    # Chroma.from_documents() appends to an existing collection at this
    # persist_directory rather than replacing it, so re-running this
    # script without clearing first silently duplicates every chunk.
    shutil.rmtree(VECTOR_DB_PATH, ignore_errors=True)

    documents = chunk_documents()

    embeddings = get_embedding_model()

    db = Chroma.from_documents(
        documents=documents,
        embedding=embeddings,
        persist_directory=str(VECTOR_DB_PATH),
    )

    return db


if __name__ == "__main__":

    db = build_vector_store()

    print()

    print("=" * 80)

    print("Vector database successfully created.")

    print(f"Stored documents: {db._collection.count()}")

    print(f"Database location: {VECTOR_DB_PATH}")