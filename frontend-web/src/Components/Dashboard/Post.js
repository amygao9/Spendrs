import React from "react";
import '../../styles/home.css';
import '../../styles/graphics.css';
import { ReactTinyLink } from 'react-tiny-link';

export default function Post(props) {
  const {post} = props;

  return (
    <div className="postContainer fadeIn">
      <div>
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
      {post.image ?
        <div className={"postImageCard"}>
          <p className={"postImageText"}> Attached Photo: </p>
          <div className={"center"}>
            <img className="postImage" alt="post" src={post.image}></img>
          </div>
        </div> : <></>
      }
      {/*for tinylink to work, users need to visit https://cors-anywhere.herokuapp.com/ and click*/}
      {/*"request temporary acceess to the demo server"*/}
      { post.link && <ReactTinyLink
        cardSize="medium"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={post.link}
      />}
      <div className={"postCaption"}>{post.caption}</div>
    </div>
  )
}
