import React from "react";
import '../../styles/home.css';

export default function Post(props) {
  const { post } = props;
  console.log('post :>> ', post);

  return (
    <div className="postContainer">
      <span className="bold">{post.userName}</span> spent 
      <span className="bold"> ${post.price}</span> on a 
      <span className="bold"> {post.itemName}</span> <br/>
      <a href={post.link}> Link </a> <br/>
      <img className="postImage" src={post.image}></img>
      <div>{post.caption}</div>
    </div>
  )
}
