import React, { useState } from "react";
import "../../styles/comments.css";
import "../../styles/graphics.css";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import { NavLink } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {likePost, commentOnPost, deleteComment} from "../../reducers/postsReducer";
import {defaultAvatar} from "../../constants";
import { useAlert } from "react-alert";


function Comment({ post, comment }) {
  const loggedInUser = useSelector(state => state.userData);
  const dispatch = useDispatch();
  const alert = useAlert();

  const deleteSelectedComment = async () => {
    const result = await dispatch(deleteComment(post._id, comment._id));
    alert.success(result);
  }

  return (
    <div className="commentContainer">
      <div className="imageContainer">
        <img
          className="profileImage"
          alt="profile"
          src={
            comment.author?.image?.url || defaultAvatar
          }
        />
      </div>
      <div className="textContainer">
        <NavLink
          to={"profile/" + comment.author.username}>
          <span className="commentName"> {comment.author.username} </span>
        </NavLink>
        <div className="commentTextContainer">{comment.comment}</div>
      </div>
      {
        loggedInUser._id === comment.author._id &&
        <span className="faTrashContainer commentIcon">
              <FaTrash
                className="faTrash"
                color={"grey"}
                title={"Delete Comment"}
                onClick={deleteSelectedComment}
              />
            </span>
      }
    </div>
  );
}

function Comments({ post, user }) {
  let status = "";
  if (post) {
    if (post.likes.length === 1) {
      status = post.likes[0] + " liked this.";
    } else if (post.likes.length > 1) {
      status =
        post.likes[0] +
        " and " +
        (post.likes.length - 1) +
        " others liked this. ";
    }
  }

  const [errorMessage, setError] = useState("")
  const dispatch = useDispatch();

  const userProfile = user.image ? user.image.url : defaultAvatar;

  const [input, setInput] = useState("");

  const comments = post.comments;

  return (
    <div className="mainContainer fadeIn">
      <div className="likesContainer">{status}</div>
      <div className="likesButtonContainer">
        <UseAnimations
          animation={heart}
          size={40}
          // strokeColor={"inherit"}
          reverse={post.likes.includes(user.username)}
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        />
        <button
          style={{background: "transparent", borderWidth: "0"}}
        />
      </div>
      <div className="commentsContainer">
        {comments.map((comment, index) => (
          <Comment key={index} post={post} comment={comment} />
        ))}
      </div>
      <div className="commentsInputContainer">
        <div className="imageContainer">
          <img className="profileImage" alt="profile" src={userProfile} />
        </div>
        <textarea
          placeholder="write your comment"
          value={input}
          maxLength="500"
          onChange={(e) => {
            setInput(e.target.value);
            e.target.style.height = '42px';
            e.target.style.height = `${Math.min(e.target.scrollHeight, 100)}px`;
          }}
          onKeyDown={(e) => {
            setError("");
            if (e.key === "Enter" && input.trim() !== "") {
              e.preventDefault();
              dispatch(commentOnPost(post._id, input));
              setInput("");
            }
            if (input.length >= 500) {
              e.preventDefault();
              setError("Max 500 Characters limit");
            }
          }}
        />
      </div>
      <p className={"redErrorText"}> {errorMessage} </p>
    </div>
  );
}

export default Comments;
