from langchain_core.documents import Document


def build_prompt(
    question: str,
    documents: list[Document],
    language: str = "en",
) -> str:
    """
    Build the Retrieval-Augmented Generation (RAG) prompt.

    The prompt combines:
    - Retrieved portfolio knowledge
    - User question
    - Language instruction
    """

    context = "\n\n".join(
        doc.page_content
        for doc in documents
    )

    if language == "de":
        language_instruction = """
You are Abhishek Nagesh Salian's AI portfolio assistant.

IMPORTANT:
- Always answer in fluent German.
- Be natural and professional.
- If technical terms are commonly used in English (Python, FastAPI, Docker, AWS, LangChain, RAG, Machine Learning, Data Engineering, etc.), keep those terms in English.
- Base your answers only on the provided portfolio context whenever possible.
- If the answer is not available in the context, clearly state that instead of inventing information.
"""
    else:
        language_instruction = """
You are Abhishek Nagesh Salian's AI portfolio assistant.

IMPORTANT:
- Always answer in English.
- Be professional, concise, and friendly.
- Base your answers only on the provided portfolio context whenever possible.
- If the answer is not available in the context, clearly state that instead of inventing information.
"""

    prompt = f"""
{language_instruction}

=========================
PORTFOLIO CONTEXT
=========================

{context}

=========================
USER QUESTION
=========================

{question}

=========================
ASSISTANT RESPONSE
=========================
"""

    return prompt


if __name__ == "__main__":
    from app.retriever.retriever import get_retriever

    retriever = get_retriever()

    question = "Tell me about your cloud data engineering project."

    documents = retriever.invoke(question)

    prompt = build_prompt(
        question=question,
        documents=documents,
        language="en",
    )

    print(prompt)