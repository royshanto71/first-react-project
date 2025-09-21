import Scoreboard from "./components/Scoreboard";
import CricketScoreboard from "./components/CricketScoreboard";
import BowlerBallCounter from "./components/BowlerBallCounter";
import UserCard from "./components/UserCard";
import Friends from "./components/friends";

import "./App.css";
import { Suspense } from "react";

const fetchUserDetails = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((response) => response.json());

const fetchFriendsData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

function App() {
  const friendsPromiseData = fetchFriendsData();
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Friends friendsPromiseData={friendsPromiseData}></Friends>
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <UserCard fetchUserDetails={fetchUserDetails}></UserCard>
      </Suspense>

      <Scoreboard></Scoreboard>
      <CricketScoreboard></CricketScoreboard>
      <BowlerBallCounter></BowlerBallCounter>
    </>
  );
}

export default App;
