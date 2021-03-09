import React from "react";
import LazyLoad from 'react-lazyload';
import '../../styles/profile.css';
import { postData } from "../../constants";
import Post from "../Dashboard/Post";
function ProfilePosts({ editable, user }) {
  
  const getFeedPosts = () => {
    let userPosts = []
    console.log(postData)
    
    for (var post in postData) {
      
      if (postData[post].userName == user.name) {
        console.log(postData[post])
        userPosts.push(postData[post])
      }
    }
    return userPosts.map((post) => {
      return <LazyLoad height={200}>
          <Post key={post.id} post={post} />
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