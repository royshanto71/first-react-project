import Scoreboard from "./components/Scoreboard";
import CricketScoreboard from "./components/CricketScoreboard";
import BowlerBallCounter from "./components/BowlerBallCounter";
import UserCard from "./components/UserCard";
import Friends from "./components/friends";
import PostCard from "./components/PostCard";
import Players from "./components/Players";
import Counter from "./components/Counter";
import HideText from "./components/HideText";

import "./App.css";
import { Suspense } from "react";

const fetchUserDetails = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((response) => response.json());

const fetchFriendsData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

// Fetch posts as a promise
const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

function App() {
  const friendsPromiseData = fetchFriendsData();
  return (
    <>
      <h1>Vite + React</h1>

      <HideText></HideText>

      <Counter></Counter>

      <Players></Players>

      <Suspense fallback={<p>Loading posts...</p>}>
        <PostCard postsPromiseData={fetchPosts} />
      </Suspense>

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
