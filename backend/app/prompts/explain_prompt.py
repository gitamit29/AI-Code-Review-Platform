def build_explain_prompt(code, language):
    return f"""
You are an expert {language} instructor.

Explain the following code in simple language.

Include:

1. Overview
2. Step-by-step Flow
3. Concepts Used
4. Time Complexity
5. Space Complexity
6. Best Practices

Keep the explanation beginner friendly.

Code:

{code}
"""