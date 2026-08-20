from langchain_huggingface import HuggingFaceEmbeddings


def get_embedding_model():
    """
    Returns the embedding model used throughout the application.
    """

    return HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2",
        model_kwargs={
            "device": "cpu"
        },
        encode_kwargs={
            "normalize_embeddings": True
        }
    )


if __name__ == "__main__":

    model = get_embedding_model()

    text = "Tell me about your AI Portfolio Assistant."

    vector = model.embed_query(text)

    print(f"\nInput Text:\n{text}\n")

    print(f"Vector Dimension: {len(vector)}")

    print("\nFirst 10 Values:\n")

    print(vector[:10])