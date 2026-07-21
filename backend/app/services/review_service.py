from app.llm.gemini_client import GeminiClient
from app.prompts.review_prompt import build_review_prompt
from app.prompts.fix_prompt import build_fix_prompt
from app.prompts.explain_prompt import build_explain_prompt
from app.prompts.test_prompt import build_test_prompt


class ReviewService:

    def __init__(self):
        self.llm = GeminiClient()

    def review(self, code, language):
        prompt = build_review_prompt(code, language)
        return self.llm.generate(prompt)

    def fix_code(self, code, language):
        prompt = build_fix_prompt(code, language)
        return self.llm.generate(prompt)
    
    def explain_code(self, code, language):
        prompt = build_explain_prompt(code, language)
        return self.llm.generate(prompt)
    def generate_tests(self, code, language):
        prompt = build_test_prompt(code, language)
        return self.llm.generate(prompt)