import React, { use } from "react";

const Friends = ({ friendsPromiseData }) => {
  const friends = use(friendsPromiseData);
  console.log(friends);
  return (
    <div className="container">
      {friends.map((friend) => (
        <div key={friend.id} className="friend-card">
          <h2>{friend.name}</h2>
          <p>{friend.email}</p>
          {friend.address.street}, {friend.address.city}
        </div>
      ))}
    </div>
  );
};

export default Friends;
