import React, { useEffect, useState } from "react";
import "../../styles/comments.css";
import "../../styles/graphics.css";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import { useDispatch } from "react-redux";
import { likePost } from "../../reducers/postsReducer";
import { apiMakeComment } from "../../axios/posts";

function Comment({ comment }) {
  return (
    <div className="commentContainer">
      <div className="imageContainer">
        <img
          className="profileImage"
          alt="profile"
          src={
            comment.author?.image?.url ||
            "https://mystickermania.com/cdn/stickers/memes/shut-up-and-take-my-money-meme.png"
          }
        />
      </div>
      <div className="textContainer">
        <span className="commentName"> {comment.author.name} </span>
        <div className="commentTextContainer">{comment.comment}</div>
      </div>
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

  const dispatch = useDispatch();

  const defaultAvatar =
    "https://mystickermania.com/cdn/stickers/memes/shut-up-and-take-my-money-meme.png";

  const userProfile = user.image.url || defaultAvatar;

  const [input, setInput] = useState("");

  const comments = post.comments;
  console.log(post);
  if (post.itemName == "tacobell") {
    console.log(user.username, post.likes);
  }
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
          style={{ background: "transparent", borderWidth: "0" }}
        ></button>
      </div>
      <div className="commentsContainer">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
      <div className="commentsInputContainer">
        <div className="imageContainer">
          <img className="profileImage" alt="profile" src={userProfile} />
        </div>
        <input
          placeholder="write your comment"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input !== "") {
              console.log("input " + input);
              apiMakeComment(post._id, input);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Comments;
