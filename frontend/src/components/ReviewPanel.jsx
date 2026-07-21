import ReactMarkdown from "react-markdown";

function ReviewPanel({ review }) {
  return (
    <div className="bg-slate-900 rounded-lg p-4 h-[570px] overflow-y-auto text-white">
      {review ? (
        <ReactMarkdown>{review}</ReactMarkdown>
      ) : (
        <p className="text-slate-400">
          AI review will appear here...
        </p>
      )}
    </div>
  );
}

export default ReviewPanel;