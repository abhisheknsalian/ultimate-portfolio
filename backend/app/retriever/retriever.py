from pathlib import Path

from langchain_chroma import Chroma

from app.vectordb.embeddings import get_embedding_model

VECTOR_DB_PATH = Path("app/vectordb/chroma")


def get_retriever():
    embeddings = get_embedding_model()

    db = Chroma(
        persist_directory=str(VECTOR_DB_PATH),
        embedding_function=embeddings,
    )

    retriever = db.as_retriever(
        search_type="mmr",
        search_kwargs={
            "k": 7,
            "fetch_k": 15,
            # Default lambda_mult (0.5) weighs diversity as heavily as
            # relevance. On this small, single-person knowledge base that
            # actively hurts recall: near-duplicate-template chunks (e.g.
            # the Bachelor's and Master's education entries share almost
            # identical structure) get treated as redundant with each
            # other, and MMR drops the correct one in favor of "diversity"
            # even when it's the most relevant result. Biasing toward
            # relevance fixes this without dropping MMR's diversity
            # benefit entirely for broader, multi-topic queries.
            "lambda_mult": 0.8,
        },
    )

    return retriever


if __name__ == "__main__":
    retriever = get_retriever()

    query = "What certifications do you have?"

    documents = retriever.invoke(query)

    print("\nRetrieved Documents\n")
    print("=" * 80)

    for index, doc in enumerate(documents, start=1):
        print(f"\nDocument {index}")
        print("-" * 80)
        print(doc.metadata)
        print()
        print(doc.page_content[:500])
        print("\n")