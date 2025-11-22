import sys
from groq_llm import run_basic

question = sys.argv[1]
print(run_basic(question))
