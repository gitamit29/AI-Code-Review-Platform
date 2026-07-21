# 🤖 AI Code Review Platform

An AI-powered Code Review Platform built using **React**, **FastAPI**, and **Google Gemini AI**. It helps developers improve code quality by providing intelligent code reviews, automatic bug fixes, code explanations, and unit test generation.

---

## 🚀 Features

- 🔍 AI Code Review
- 🛠️ AI Code Fix Suggestions
- 💡 AI Code Explanation
- 🧪 AI Unit Test Generation
- 🌐 Multi-language Support
- 📂 File Upload
- 🎯 Automatic Language Detection
- 📊 Code Statistics
  - Lines of Code
  - Characters
  - Functions
  - Classes
- 📝 Monaco Code Editor
- ⚡ FastAPI Backend
- 🎨 Modern Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Monaco Editor
- Axios
- React Markdown
- React Icons

### Backend
- FastAPI
- Python
- Pydantic
- Google Gemini API

---

## 📁 Project Structure

```
AI-Code-Review-Platform/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── llm/
│   │   ├── prompts/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   ├── requirements.txt
│   └── test_gemini.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/gitamit29/AI-Code-Review-Platform.git
cd AI-Code-Review-Platform
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

## 🧠 AI Features

### AI Code Review
Provides detailed analysis of:
- Code Quality
- Performance
- Best Practices
- Readability
- Maintainability

### AI Code Fix
- Detects bugs
- Suggests improvements
- Generates corrected code

### AI Code Explanation
Explains the submitted code in simple language for better understanding.

### AI Test Generation
Automatically generates unit test cases for the provided source code.

---

## 📈 Future Enhancements

- Compare Original vs Fixed Code
- GitHub Repository Review
- ZIP Project Review
- Code Complexity Analysis
- Security Analysis
- Documentation Generator
- Export Report as PDF
- AI Chat Assistant
- Dark/Light Theme

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Amit Shinde**

- 🎓 B.E. Artificial Intelligence & Data Science
- 💼 Aspiring AI/ML Engineer & Data Analyst
- 🌐 GitHub: https://github.com/gitamit29

---

⭐ If you found this project useful, don't forget to star the repository!
