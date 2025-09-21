import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./CSS/component.css";

function BowlerBallCounter() {
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);
  const [noBalls, setNoBalls] = useState(0);

  const bowlBall = () => {
    if (balls === 5) {
      setOvers(overs + 1);
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const noBall = () => {
    setNoBalls(noBalls + 1);
  };

  return (
    <div className="counter-container">
      <h2>Bowler Ball Counter</h2>
      <p>
        Overs: {overs}.{balls}
      </p>
      <p>No Balls: {noBalls}</p>

      <button className="counter-button" onClick={bowlBall}>
        Bowl <FontAwesomeIcon icon={faBullseye} />
      </button>
      <button className="counter-button" onClick={noBall}>
        <FontAwesomeIcon icon={faCircleXmark} /> No Ball
      </button>
    </div>
  );
}

export default BowlerBallCounter;
