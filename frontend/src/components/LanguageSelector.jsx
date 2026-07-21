function LanguageSelector({ language, setLanguage }) {
  const languages = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C",
    "Go",
  ];

  return (
    <div className="mb-4">
      <label className="text-white font-medium mr-3">
        Language
      </label>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-slate-700 text-white px-4 py-2 rounded-lg outline-none"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;