import React from "react";
import '../../styles/home.css';
import '../../styles/graphics.css';
import { ReactTinyLink } from 'react-tiny-link';
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../reducers/postsReducer";
import {defaultAvatar} from "../../constants";
import { useAlert } from "react-alert";

export default function Post({ post }) {
  const loggedInUser = useSelector(state => state.userData);
  const user = post.user;
  const dispatch = useDispatch();
  const alert = useAlert();

  const deleteSelectedPost = async () => {
    const result = await dispatch(deletePost(post._id));
    alert.success(result);
  }
  
  return (
    <div className="postContainer fadeIn">
      <div>
        <img
          className="profileImage"
          style={{position: "absolute"}}
          alt="profile"
          src={post.user.image? user.image.url : defaultAvatar}
        />
        <div className={"postHeader"}>
          <span className="bold"> {user.name}</span> spent
          <span className="bold"> ${post.price}</span> on a
          <span className="bold"> {post.itemName}</span> 
          {
            loggedInUser._id === post.user._id && 
            <span className="faTrashContainer">
              <FaTrash
              className="faTrash"
              color={"grey"}
              title={"Delete Post"}
              onClick={() => {
                deleteSelectedPost();
              }}
              />
            </span>
          }
          <br/>
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
