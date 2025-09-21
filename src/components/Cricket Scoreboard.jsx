import { useState } from "react";

export default function CricketScoreboard() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  return (
    <div>
      <h2>
        Score: {runs}/{wickets}
      </h2>
      <button onClick={() => setRuns(runs + 1)}>➕ 1 Run</button>
      <button onClick={() => setRuns(runs + 4)}>🏏 Four</button>
      <button onClick={() => setRuns(runs + 6)}>🎯 Six</button>
      <button onClick={() => setWickets(wickets + 1)}>❌ Wicket</button>

      {/* Conditional Rendering */}
      {runs >= 50 && <p>{runs >= 100 ? "🎉 Century!" : "🏏 Half Century"}</p>}
    </div>
  );
}
