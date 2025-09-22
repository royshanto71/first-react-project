import React from "react";
import { useState, useEffect } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="container">
      Players: {players.length}
      {players.map((player) => (
        <div key={player.id} className="container">
          <h2>{player.name}</h2>
          <p>{player.email}</p>
          {player.address.street}, {player.address.city}
        </div>
      ))}
    </div>
  );
};

export default Players;
