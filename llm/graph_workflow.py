from langgraph.graph import StateGraph, END
from langchain_core.messages import HumanMessage
from llm.groq_llm import get_llm

llm = get_llm()

# ----- Graph State -----
class QAState(dict):
    question: str
    expanded: str
    answer: str
    summary: str

# ----- Nodes -----
def expand_node(state):
    q = state["question"]
    out = llm.invoke([HumanMessage(content=f"Expand this question: {q}")])
    state["expanded"] = out.content
    return state

def answer_node(state):
    exp = state["expanded"]
    out = llm.invoke([HumanMessage(content=f"Answer clearly:\n{exp}")])
    state["answer"] = out.content
    return state

def summary_node(state):
    ans = state["answer"]
    out = llm.invoke([HumanMessage(content=f"Summarize in 2 lines:\n{ans}")])
    state["summary"] = out.content
    return state

# Build Workflow
graph = StateGraph(QAState)
graph.add_node("expand", expand_node)
graph.add_node("answer", answer_node)
graph.add_node("summary", summary_node)

graph.set_entry_point("expand")
graph.add_edge("expand", "answer")
graph.add_edge("answer", "summary")
graph.add_edge("summary", END)

workflow = graph.compile()

def run_graph(question: str):
    result = workflow.invoke({"question": question})
    return result["summary"]
