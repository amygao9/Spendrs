import React from "react";
import '../../styles/home.css';
import '../../styles/graphics.css'

export default function Post(props) {
  const { post } = props;
  const image = post.image ? post.image : "https://buildvirtual.net/wp-content/plugins/penci-soledad-amp/assets/images/no-thumb.jpg";

  return (
    <div className="postContainer fadeIn">
      <span className="bold">{post.userName}</span> spent 
      <span className="bold"> ${post.price}</span> on a 
      <span className="bold"> {post.itemName}</span> <br/>
      <a href={post.link}> Link </a> <br/>
      <img className="postImage" alt="post" src={image}></img>
      <div>{post.caption}</div>
    </div>
  )
}
