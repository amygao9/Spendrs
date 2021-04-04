import React from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import {uploadProfilePic} from "../../axios/user";

function ProfilePicture({ editable, user }) {
  const defaultAvatar = "https://mystickermania.com/cdn/stickers/memes/shut-up-and-take-my-money-meme.png"

  if (editable) return (
    <div>
      {/*<img src={user.image? user.image.url : defaultAvatar} alt="Profile" className="profilePicture shadowSmall"/>*/}
      <form className="image-form" onSubmit={(e) => {
        e.preventDefault();
        uploadProfilePic(e.target);
      }}>
        <div className="image-form__field">
          <label>Image:</label>
          <input name="image" type="file"/>
        </div>
        <button
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
    );

  if (!editable) return (
    <img src={user.image? user.image.url : defaultAvatar} alt="Profile Picture" className="profilePicture shadowSmall"/>
  );
}

export default ProfilePicture;