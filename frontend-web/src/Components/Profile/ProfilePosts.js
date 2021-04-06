import React, {useEffect, useState} from "react";
import LazyLoad from 'react-lazyload';
import '../../styles/profile.css';
import Post from "../Dashboard/Post";
import {apiGetAllUserPosts} from "../../axios/posts";


function ProfilePosts({ user }) {

  const [posts, setPosts] = useState([])

  useEffect( () => {
    apiGetAllUserPosts().then((data) => {
      console.log('data :>> ', data);
      setPosts(data)
    }).catch(err => {
      console.log("err: " + err)
    })
  }, [])

  const getFeedPosts = () => {
    return posts.map((post) => {
      console.log("post" + post)
      return <LazyLoad key={user} height={200}>
          <Post key={post.id} user={user} post={post}/>
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