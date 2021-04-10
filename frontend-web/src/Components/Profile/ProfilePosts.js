import React from "react";
import LazyLoad from 'react-lazyload';
import '../../styles/profile.css';
import Post from "../Dashboard/Post";


function ProfilePosts({ user }) {

  const getFeedPosts = () => {
    if (user.posts.length === 0) {
      return <h3> No Posts have been posted. </h3>
    }
    return user.posts.slice(0).reverse().map((post, index) => {
      return <LazyLoad key={index} height={200}>
        <div style={{borderBottom:"1px solid lightgrey", paddingTop:"5px"}}>
          <Post key={index} user={user} post={post}/>
        </div>
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