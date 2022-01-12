export default function TestEnd({ score, restart }) {
  return (
    <div>
      <div>Test has ended.</div>
      <div>Your score is {score}</div>
      <button onClick={restart}>Restart</button>
    </div>
  );
}
