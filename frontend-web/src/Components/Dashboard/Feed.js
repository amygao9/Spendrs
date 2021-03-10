import React from "react";
import LazyLoad from "react-lazyload";
import "../../styles/home.css";
import Post from "./Post";
import Comments from "./Comments";

export default function Feed({postData}) {

  const getFeedPosts = () => {
    return postData.map((post, index) => {
      return (
        <LazyLoad height={200} style={{ marginBottom: "30px" }} key={index}>
          <div
            style={{
              width: "30rem",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Post post={post} />
            <Comments />
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
