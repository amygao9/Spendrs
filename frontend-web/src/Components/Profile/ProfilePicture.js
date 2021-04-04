import React, {useState} from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import {uploadProfilePic} from "../../axios/user";
import {Modal} from "react-bootstrap";

function ProfilePicture({ editable, user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const defaultAvatar = "https://mystickermania.com/cdn/stickers/memes/shut-up-and-take-my-money-meme.png"

  if (editable) return (
    <div>
      <img src={user.image? user.image.url : defaultAvatar}
           alt="Profile"
           className="profilePicture shadowSmall"
      />
      <div onClick={handleShow} className={"profilePictureHover"}>Change Photo</div>
      <UploadPicture show={show} handleClose={handleClose}/>
    </div>
    );

  if (!editable) return (
    <img src={user.image? user.image.url : defaultAvatar} alt="Profile Picture" className="profilePicture shadowSmall"/>
  );
}

function UploadPicture ({show, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} style={{margin:"200px"}}>
      <form className="image-form" onSubmit={(e) => {
        e.preventDefault();
        uploadProfilePic(e.target);
        handleClose();
      }}>
        <div className="image-form__field">
          <label>Image:</label>
          <input name="image" type="file" accept="image/png, image/jpeg"/>
        </div>
        <button
          type="submit"
        >
          Upload
        </button>
      </form>
    </Modal>
  )
}

export default ProfilePicture;