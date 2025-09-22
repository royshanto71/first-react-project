import React, { useState } from "react";

const ShowHideText = () => {
  // state to track visibility
  const [visiableText, setVisiableText] = useState("");

  return (
    <div className="container">
      <h1>{visiableText}</h1>
      <button onClick={() => setVisiableText(" Hello, React Learner!")}>
        Show Text
      </button>
      <button onClick={() => setVisiableText("")}>Hide Text</button>
    </div>
  );
};

export default ShowHideText;
