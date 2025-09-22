import React, { useState } from "react";

function ShowHideText() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggle() {
    if (isVisible === true) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  return (
    <div className="container">
      {isVisible ? <h1>Hello, React Learner!</h1> : null}

      <button onClick={handleToggle}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
}

export default ShowHideText;
