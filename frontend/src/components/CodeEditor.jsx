import Editor from "@monaco-editor/react";

function CodeEditor({ language, code, setCode }) {
  return (
    <Editor
      height="570px"
      language={language.toLowerCase()}
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || "")}
      options={{
        fontSize: 15,
        minimap: { enabled: false },
        automaticLayout: true,
        scrollBeyondLastLine: false,
        wordWrap: "on",
      }}
    />
  );
}

export default CodeEditor;