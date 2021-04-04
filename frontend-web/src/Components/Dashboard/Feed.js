import React from "react";
import LazyLoad from "react-lazyload";
import "../../styles/home.css";
import Post from "./Post";
import Comments from "./Comments";
import TimeAgo from "../utils/TimeAgo";
import {users} from "../../constants";

export default function Feed({ postData, user }) {
  const getFeedPosts = () => {
    return postData.map((post, index) => {
      console.log(post)
      console.log(users[post.userName])
      return (
        <LazyLoad height={200} style={{ marginBottom: "30px" }} key={index}>
          <TimeAgo timestamp={post.timestamp}/>
          <div className={"feedItemContainer spendrCard shadowMedium"}>

            <Post user={users[post.userName]?users[post.userName]:users["Alex Shih"]} post={post} />
            <Comments post={post} user={user} key={post.id} />
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
