import { useState } from "react";

export default function Scoreboard() {
  const [score, setScore] = useState(0);
  function handleGoal() {
    const newScore = score + 1;
    setScore(newScore);
  }

  return (
    <div>
      <h2>Score: {score}</h2>
      <button onClick={handleGoal}>⚽ Goal!</button>
    </div>
  );
}
