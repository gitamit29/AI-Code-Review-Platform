def build_fix_prompt(code, language):
    return f"""
You are a Senior {language} Software Engineer.

Improve the following {language} code.

Instructions:
- Fix syntax errors.
- Fix logical bugs.
- Improve readability.
- Improve performance where appropriate.
- Follow {language} best practices.

Your response MUST follow this format exactly.

## Changes Made

- Explain each improvement in bullet points.
- Mention why each change was made.
- Keep explanations concise.

## Fixed Code

Return ONLY the improved code here.

Code:

{code}
"""