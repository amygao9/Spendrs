import React, {useState} from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { uploadProfilePic } from "../../reducers/userDataReducer";
import {Modal} from "react-bootstrap";
import { useDispatch } from "react-redux";
import {defaultAvatar} from "../../constants";

function ProfilePicture({ editable, user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (editable) return (
    <div>
      <img src={user.image? user.image.url : defaultAvatar}
           alt="User's profile avatar"
           className="profilePicture shadowSmall"
      />
      <div onClick={handleShow} className={"profilePictureHover"}>Change Photo</div>
      <UploadPicture show={show} handleClose={handleClose}/>
    </div>
    );

  if (!editable) return (
    <img src={user.image? user.image.url : defaultAvatar} alt="User" className="profilePicture shadowSmall"/>
  );
}

function UploadPicture ({show, handleClose}) {
  const dispatch = useDispatch();

  async function uploadPicture(event) {
    event.preventDefault();
    const imageFile = event.target.image.files[0];
    dispatch(uploadProfilePic(imageFile));
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose} className={"modalContainer"}>
      <div id={"uploadPhotoModal"}>
      <form className="image-form" onSubmit={uploadPicture}>
        <div className="image-form__field">
          <label>Image:</label>
          <input name="image" type="file" accept="image/*"/>
        </div>
        <button
          type="submit"
        >
          Upload
        </button>
      </form>
      </div>
    </Modal>
  )
}

export default ProfilePicture;