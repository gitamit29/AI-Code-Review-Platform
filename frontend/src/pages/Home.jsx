import { useState } from "react";
import {
  FaUpload,
  FaFileCode,
  FaCode,
  FaCogs,
  FaCube,
  FaMagic,
  FaLightbulb,
} from "react-icons/fa";

import LanguageSelector from "../components/LanguageSelector";
import CodeEditor from "../components/CodeEditor";
import ReviewPanel from "../components/ReviewPanel";
import api from "../services/api";
import { FaFlask } from "react-icons/fa";

function Home() {
  const [language, setLanguage] = useState("python");

  const [code, setCode] = useState(`def hello():
    print("Hello AI Reviewer")

hello()
`);

  const [review, setReview] = useState("");

  const [loading, setLoading] = useState(false);
  const [fixLoading, setFixLoading] = useState(false);
  const [explainLoading, setExplainLoading] = useState(false);
  const [testLoading, setTestLoading] = useState(false);

  // ------------------------
  // Code Statistics
  // ------------------------

  const lines = code.trim() ? code.split("\n").length : 0;
  const characters = code.length;

  const functionRegex =
    /\b(def|function|func|public|private|protected|static)\b/g;

  const classRegex =
    /\b(class|interface|struct|enum)\b/g;

  const functions = (code.match(functionRegex) || []).length;
  const classes = (code.match(classRegex) || []).length;

  // ------------------------
  // Review Code
  // ------------------------

  const handleReview = async () => {
    try {
      setLoading(true);

      const response = await api.post("/review", {
        language,
        code,
      });

      setReview(response.data.review);
    } catch (error) {
      console.error(error);
      setReview("❌ Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  // ------------------------
  // Fix Code
  // ------------------------

  const handleFixCode = async () => {
  try {
    setFixLoading(true);

    const response = await api.post("/fix", {
      language,
      code,
    });

    const result = response.data.result;

    // Split explanation and code
    const parts = result.split("## Fixed Code");

    if (parts.length === 2) {
      setReview(parts[0].trim());
      setCode(parts[1].trim());
    } else {
      setReview(result);
    }

  } catch (error) {
    console.error(error);
    setReview("❌ Unable to fix code.");
  } finally {
    setFixLoading(false);
  }
};

// ------------------------
// Explain Code
// ------------------------

const handleExplainCode = async () => {
  try {
    setExplainLoading(true);

    const response = await api.post("/explain", {
      language,
      code,
    });

    setReview(response.data.explanation);

  } catch (error) {
    console.error(error);
    setReview("❌ Unable to explain code.");
  } finally {
    setExplainLoading(false);
  }
};

const handleGenerateTests = async () => {
  try {
    setTestLoading(true);

    const response = await api.post("/tests", {
      language,
      code,
    });

    setReview(response.data.tests);

  } catch (error) {
    console.error(error);
    setReview("❌ Unable to generate tests.");
  } finally {
    setTestLoading(false);
  }
};

  // ------------------------
  // Upload File
  // ------------------------

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      setCode(e.target.result);

      const ext = file.name.split(".").pop().toLowerCase();

      const map = {
        py: "python",
        java: "java",
        cpp: "cpp",
        c: "c",
        js: "javascript",
        ts: "typescript",
        go: "go",
        php: "php",
        sql: "sql",
      };

      if (map[ext]) {
        setLanguage(map[ext]);
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="grid grid-cols-2 gap-6">

        {/* LEFT PANEL */}

        <div className="bg-slate-800 rounded-xl p-5 h-[78vh] flex flex-col">

          {/* Top Controls */}

          <div className="flex justify-between items-center mb-4">

            <LanguageSelector
              language={language}
              setLanguage={setLanguage}
            />

            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">

              <FaUpload />

              Upload

              <input
                type="file"
                className="hidden"
                accept=".py,.java,.cpp,.c,.js,.ts,.go,.php,.sql"
                onChange={handleFileUpload}
              />

            </label>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-4 gap-3 mb-4">

            <div className="bg-slate-700 rounded-lg p-2 text-center">

              <FaFileCode className="mx-auto text-blue-400 mb-2 text-xl" />

              <p className="text-gray-300 text-sm">Lines</p>

              <h2 className="text-white font-bold text-xl">
                {lines}
              </h2>

            </div>

            <div className="bg-slate-700 rounded-lg p-2 text-center">

              <FaCode className="mx-auto text-green-400 mb-2 text-xl" />

              <p className="text-gray-300 text-sm">Characters</p>

              <h2 className="text-white font-bold text-xl">
                {characters}
              </h2>

            </div>

            <div className="bg-slate-700 rounded-lg p-2 text-center">

              <FaCogs className="mx-auto text-yellow-400 mb-2 text-xl" />

              <p className="text-gray-300 text-sm">Functions</p>

              <h2 className="text-white font-bold text-xl">
                {functions}
              </h2>

            </div>

            <div className="bg-slate-700 rounded-lg p-2 text-center">

              <FaCube className="mx-auto text-purple-400 mb-2 text-xl" />

              <p className="text-gray-300 text-sm">Classes</p>

              <h2 className="text-white font-bold text-xl">
                {classes}
              </h2>

            </div>

          </div>

          {/* Code Editor */}

          <CodeEditor
            language={language}
            code={code}
            setCode={setCode}
          />

{/* Action Buttons */}

<div className="flex justify-center gap-3 mt-4 flex-wrap">

  {/* Review */}
  <button
    onClick={handleReview}
    disabled={loading}
    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition"
  >
    🚀 {loading ? "Reviewing..." : "Review"}
  </button>

  {/* Fix */}
  <button
    onClick={handleFixCode}
    disabled={fixLoading}
    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition"
  >
    <FaMagic />
    {fixLoading ? "Fixing..." : "Fix"}
  </button>

  {/* Explain */}
  <button
    onClick={handleExplainCode}
    disabled={explainLoading}
    className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition"
  >
    <FaLightbulb />
    {explainLoading ? "Explaining..." : "Explain"}
  </button>

  {/* Tests */}
  <button
    onClick={handleGenerateTests}
    disabled={testLoading}
    className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition"
  >
    <FaFlask />
    {testLoading ? "Generating..." : "Tests"}
  </button>

</div> {/* Action Buttons */}

</div> {/* LEFT PANEL */}

{/* RIGHT PANEL */}

        <div className="bg-slate-800 rounded-xl p-5 h-[78vh] flex flex-col">

          <h2 className="text-white text-xl font-semibold mb-4">
            AI Review
          </h2>

          <ReviewPanel review={review} />

        </div>

      </div>

    </div>
  );
}

export default Home;