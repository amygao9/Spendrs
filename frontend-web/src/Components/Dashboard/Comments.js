import React, { useState } from "react";
import "../../styles/comments.css";
import "../../styles/graphics.css";

// we should prob move the svgs else where lmao
const like = (
  <svg
    width="32"
    height="32"
    viewBox="20 23 36 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="76" height="76" fill="url(#pattern0)" fill-opacity="0.5" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0" transform="scale(0.005)" />
      </pattern>
      <image
        id="image0"
        width="200"
        height="200"
        xlinkHref="data:image/png;base64,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U5O9iorFA5KcMWdb5yRxSLS9zgVur1eACrcXz7nk+nmS43vX0v/lCUlYR1n4mmku94iDlX/9jn67QYEjk5zXk4nJzB9McugScWRZftMUhNon2zxiiXW6qAIbE6Cyjq5Ou2rfyeB0CM19RN8wDAx5xjK1zqObQsI22NaYGk9ubMe44WEJ3C8J9SJNZq59Url4WCXatPHqesuxWQ/rdjCgCp6zxiPA+yX0It9k6trnP2Zngf2S8McZgXm1ZZt5rJN1GxQYvQCPeJ+QhPfbmwxe+/xmEv5q3zXzWAfrWuVj49EDm4DtEKCtFLXeffcmTUEoP/kNv2UdBgW2WoAeRRhGoCwEXdMsy28MCkxGgI6geULV1bsIhYXvWMZOoyeTLUxoKXB4x9MqnmA5sE+p5fRkBR6QhCYi/B03WQUTroACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKKCAAgoooIACCiiggAIKKDA9gf8Cw7x3z3lXBpMAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

const share = (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.8705 1.08961L17.8706 1.08965L27.8395 10.5886C28.0536 10.7927 28.0534 11.2074 27.8395 11.4113C27.8395 11.4113 27.8395 11.4113 27.8395 11.4113L17.8705 20.9113L17.8705 20.9113C17.8018 20.9768 17.7462 20.994 17.7092 20.9989C17.6671 21.0046 17.6141 20.9983 17.5559 20.9693C17.446 20.9145 17.3125 20.772 17.3125 20.5V15.0053V13.9893L16.2966 14.0054C14.0656 14.0408 12.0963 14.2201 10.4406 14.6332C8.78457 15.0465 7.37644 15.71 6.34146 16.7619C4.21448 18.9238 4.04416 22.2849 5.34822 26.8868L5.34822 26.8868C5.35595 26.9141 5.35663 26.9317 5.35628 26.9411C5.35592 26.9507 5.35424 26.9575 5.35232 26.9627C5.34897 26.9718 5.34272 26.9814 5.33433 26.9893C3.06064 25.1581 1 21.6322 1 18.1453C1 15.8928 1.42664 14.1534 2.15094 12.8009C2.87195 11.4546 3.91739 10.4362 5.24638 9.66501C7.94936 8.09641 11.8021 7.56129 16.3251 7.50415L17.3125 7.49168V6.50423V1.50093C17.3125 1.22987 17.4458 1.08676 17.5562 1.03162C17.6144 1.00253 17.6673 0.996301 17.7092 1.00187C17.7459 1.00675 17.8015 1.02383 17.8705 1.08961Z"
      stroke="black"
      stroke-opacity="0.5"
      stroke-width="2"
    />
  </svg>
);

function Comment(props) {
  console.log(props.profile, props.comment, props.userName);
  return (
    <div className="commentContainer">
      <div className="imageContainer">
        <img className="profileImage" src={props.profilePicture} />
      </div>
      <div className="textContainer">
        <span className="commentName"> {props.userName} </span>
        <div className="commentTextContainer">{props.comment}</div>
      </div>
    </div>
  );
}

function Comments(props) {
  let tempStatus = "";
  if (props.post) {
    if (props.post.likes.length == 1) {
      tempStatus = props.post.likes[0] + " liked this.";
    } else if (props.post.likes.length > 1) {
      tempStatus =
        props.post.likes[0] +
        " and " +
        (props.post.likes.length - 1) +
        " others liked this. ";
    }

    if (props.post.shares.length != 0) {
      tempStatus += props.post.shares.length + " people shared this.";
    }
  }

  const status = tempStatus || "alexshihh20 and 12 others liked this. 2 shared";

  const userProfile =
    props.userProfile || "https://cdn.frankerfacez.com/emoticon/336471/4";

  // either this should be passed in by parents or this could be an api call
  const tempComments = props.post.comments || [
    {
      profile: "https://cdn.frankerfacez.com/emoticon/336471/4",
      userName: "alex shih",
      comment: `Somebody once told me the world is gonna roll me I ain't the sharpest
      tool in the shed She was looking kind of dumb with her finger and her
      thumb In the shape of an "L" on her forehead`,
    },
  ];

  console.log(tempComments);

  const [input, setInput] = useState("");

  const [comments, setComments] = useState(tempComments);

  return (
    <div className="mainContainer fadeIn">
      <div className="likesContainer">{status}</div>
      <div className="likesButtonContainer">
        <div className="svgContainer">{like}</div>
        <div className="svgContainer">{share}</div>
      </div>
      <div className="commentsContainer">
        {comments.map((comment) => (
          <Comment {...comment} />
        ))}
      </div>
      <div className="commentsInputContainer">
        <div className="imageContainer">
          <img className="profileImage" src={userProfile} />
        </div>
        <input
          placeholder="write your comment"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == "Enter" && input != "") {
              setInput("");
              setComments([
                ...comments,
                {
                  profilePicture:
                    "https://cdn.frankerfacez.com/emoticon/336471/4",
                  userName: "SwiggitySwog",
                  comment: input,
                },
              ]);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Comments;
