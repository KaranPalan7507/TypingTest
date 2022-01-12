import "./style.css";
export default function SourceText({ sourceText }) {
  return (
    <div className="source-display-container">
      <div>Source Text</div>
      <textarea
        disabled
        rows="10"
        className="source-text-display"
        value={sourceText}
      ></textarea>
    </div>
  );
}
