import React from "react";
import '../../styles/home.css';
import '../../styles/graphics.css'
import TimeAgo from "../utils/TimeAgo";

export default function Post(props) {
  const { post } = props;
  const image = post.image ? post.image : "https://buildvirtual.net/wp-content/plugins/penci-soledad-amp/assets/images/no-thumb.jpg";

  return (
    <div className="postContainer fadeIn">
      <span className="bold">{post.userName}</span> spent 
      <span className="bold"> ${post.price}</span> on a 
      <span className="bold"> {post.itemName}</span> <br/>
      <div>
        <TimeAgo timestamp={post.timestamp}/>
      </div>
      <a href={post.link}> Link </a> <br/>
      <img className="postImage" alt="post" src={image}></img>
      <div>{post.caption}</div>
    </div>
  )
}
