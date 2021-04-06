import React from "react";
import LazyLoad from "react-lazyload";
import "../../styles/home.css";
import Post from "./Post";
import Comments from "./Comments";
import TimeAgo from "../utils/TimeAgo";

export default function Feed({ postData, user }) {
  console.log('postData :>> ', postData);
  const getFeedPosts = () => {
    return postData.map((post, index) => {
      return (
        <LazyLoad height={200} style={{ marginBottom: "30px" }} key={index}>
          <TimeAgo timestamp={post.createdAt}/>
          <div className={"feedItemContainer spendrCard shadowMedium"}>

            <Post post={post} />
            <Comments post={post} user={user} key={post.id} />
          </div>
        </LazyLoad>
      );
    });
  };

  return (
    <div>
      <h1>Your Feed</h1>
      { postData.length === 0 ? <h2>No posts. Go follow someone to see their posts!</h2> : getFeedPosts()}
    </div>
  );
}
