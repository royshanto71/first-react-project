import React, { useState } from "react";

const ShowHideText = () => {
  // state to track visibility
  const [isVisible, setIsVisible] = useState(false);

  // toggle function
  const toggleText = () => {
    setIsVisible((previous) => !previous);
  };

  return (
    <div className="container">
      {isVisible && <h1>Hello, React Learner!</h1>}
      <button onClick={toggleText}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
};

export default ShowHideText;
