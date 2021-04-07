import React, {useEffect, useState} from "react";
import LazyLoad from 'react-lazyload';
import '../../styles/profile.css';
import Post from "../Dashboard/Post";
import {apiGetAllUserPosts} from "../../axios/posts";


function ProfilePosts({ user }) {
  const getFeedPosts = () => {
    return user.posts.map((post, index) => {
      return <LazyLoad key={index} height={200}>
          <Post key={index} user={user} post={post}/>
      </LazyLoad>
    })
  }
  return (
    <div className="profilePosts shadowMedium">
      <h1 className="bold profileName"> Posts</h1>
      {getFeedPosts()}
    </div>
  );
}

export default ProfilePosts;