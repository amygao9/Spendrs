import React from "react";
import LazyLoad from "react-lazyload";
import { postData } from "../../constants";
import "../../styles/home.css";
import Post from "./Post";
import Comments from "./Comments";

export default function Feed() {
  const getFeedPosts = () => {
    return postData.map((post) => {
      return (
        <LazyLoad height={200} style={{ marginBottom: "30px" }}>
          <div
            style={{
              width: "30rem",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Post key={post.id} post={post} />
            <Comments post={post} key={post.id} />
          </div>
        </LazyLoad>
      );
    });
  };

  return (
    <div>
      <h1>Your Feed</h1>
      {getFeedPosts()}
    </div>
  );
}
