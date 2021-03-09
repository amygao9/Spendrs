import React from "react";
import LazyLoad from 'react-lazyload';
import { postData } from "../../constants";
import '../../styles/home.css';
import Post from "./Post";

export default function Feed() {
  const getFeedPosts = () => {
    return postData.map((post) => {
      return <LazyLoad height={200}>
          <Post key={post.id} post={post} />
      </LazyLoad>
    })
  }

  return (
    <div>
      <h1>Your Feed</h1>
      {getFeedPosts()}
    </div>
  );
}
