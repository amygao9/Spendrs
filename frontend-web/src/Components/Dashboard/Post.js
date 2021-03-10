import React from "react";
import '../../styles/home.css';
import '../../styles/graphics.css'
import TimeAgo from "../utils/TimeAgo";
import { ReactTinyLink } from 'react-tiny-link';

export default function Post(props) {
  const {post} = props;
  const image = post.image ? post.image : "https://buildvirtual.net/wp-content/plugins/penci-soledad-amp/assets/images/no-thumb.jpg";

  return (
    <div className="postContainer fadeIn">
      <div style={{height: "45px"}}>
        <img
          className="profileImage"
          style={{position: "absolute"}}
          alt="profile"
          src={post.userProfilePic}
        />
        <div className={"postHeader"}>
          <span className="bold"> {post.userName}</span> spent
          <span className="bold"> ${post.price}</span> on a
          <span className="bold"> {post.itemName}</span> <br/>
        </div>
      </div>
      <div>
        <TimeAgo timestamp={post.timestamp}/>
      </div>
      <ReactTinyLink
        cardSize="medium"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={post.link}
      />
      <div className={"postImageCard"}>
        <p className={"postImageText"}> Attached Photo: </p>
        <div className={"center"}>
          <img className="postImage" alt="post" src={image}></img>
        </div>
      </div>
      <div className={"postCaption"}>{post.caption}</div>
    </div>
  )
}
