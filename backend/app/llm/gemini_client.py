from dotenv import load_dotenv
from google import genai
import os

load_dotenv()


class GeminiClient:

    def __init__(self):

        self.client = genai.Client(
            api_key=os.getenv("GEMINI_API_KEY")
        )

        self.model = "gemini-3.1-flash-lite"

    def generate(self, prompt: str):

        response = self.client.models.generate_content(
            model=self.model,
            contents=prompt
        )

        return response.text