import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

def get_llm():
    return ChatGroq(
        groq_api_key=os.getenv("GROQ_API_KEY"),
        model=os.getenv("LLM_MODEL", "llama3-8b-8192")
    )

def run_basic(prompt):
    llm = get_llm()
    template = ChatPromptTemplate.from_messages([
        ("system", "You are a helpful LLaMA AI assistant."),
        ("user", "{input}")
    ])
    chain = template | llm
    return chain.invoke({"input": prompt}).content
