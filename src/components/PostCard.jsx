import React, { use } from "react";

const PostCard = ({ postsPromiseData }) => {
  const posts = use(postsPromiseData);

  return (
    <div className="container">
      {posts.map((post) => (
        <div key={post.id} className="container">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
