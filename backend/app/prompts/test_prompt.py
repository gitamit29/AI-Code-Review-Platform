def build_test_prompt(code, language):
    return f"""
You are an expert {language} software engineer.

Generate comprehensive unit tests for the following code.

Requirements:
- Use the standard testing framework for {language}.
- Cover normal cases.
- Cover edge cases.
- Cover invalid inputs where applicable.
- Return ONLY the test code.
- Do not include explanations.

Code:

{code}
"""