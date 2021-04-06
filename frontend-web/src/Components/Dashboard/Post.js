import React from "react";
import '../../styles/home.css';
import '../../styles/graphics.css';
import { ReactTinyLink } from 'react-tiny-link';

export default function Post({post}) {
  const user = post.user
  const defaultAvatar = "https://mystickermania.com/cdn/stickers/memes/shut-up-and-take-my-money-meme.png"
  return (
    <div className="postContainer fadeIn">
      <div>
        <img
          className="profileImage"
          style={{position: "absolute"}}
          alt="profile"
          src={post.image? user.image.url : defaultAvatar}
        />
        <div className={"postHeader"}>
          <span className="bold"> {user.username}</span> spent
          <span className="bold"> ${post.price}</span> on a
          <span className="bold"> {post.itemName}</span> <br/>
        </div>
      </div>
      {post.attachedImage ?
        <div className={"postImageCard"}>
          <p className={"postImageText"}> Attached Photo: </p>
          <div className={"center"}>
            <img className="postImage" alt="post" src={post.attachedImage.url}/>
          </div>
        </div> : <></>
      }

      { post.itemLink && <ReactTinyLink
        cardSize="medium"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        url={post.itemLink}
        proxyUrl={"https://thingproxy.freeboard.io/fetch"}  // This proxy may break in the future.
      />}
      <div className={"postCaption"}>{post.description}</div>
    </div>
  )
}
