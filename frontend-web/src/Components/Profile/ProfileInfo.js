import React, { useState } from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Row } from "react-bootstrap";
import EditModal from "../utils/EditModal";
import { useDispatch } from "react-redux";
import { updateUser } from "../../reducers/userDataReducer";

function ProfileInfo({ editable, user }) {

  const [username, setUsername] = useState(user["username"]);
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [description, setDescription] = useState(user["description"]);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const [showEditUsername, setShowEditUsername] = useState(false);
  const [showEditDescription, setShowEditDescription] = useState(false);

  const dispatch = useDispatch();

  const handleCloseEditUsername = (update) => {
    setShowEditUsername(false);
    if (update) {
      setUsername(updatedUsername);
    }
  };
  const handleCloseEditDescription = (update) => {
    setShowEditDescription(false);
    if (update) {
      setDescription(updatedDescription);
    }
  };
  const handleShowEditUsername = () => setShowEditUsername(true);
  const handleShowEditDescription = () => setShowEditDescription(true);

  const changeUpdatedUsername = (event) => { setUpdatedUsername(event.target.value) };
  const changeUpdatedDescription = (event) => { setUpdatedDescription(event.target.value) };

  const handleSubmit = async (e, name) => {
    e.preventDefault();
    if (name === "Username") {
      const result = await dispatch(updateUser({username: updatedUsername}));
      console.log('result :>> ', result);
      if (result.err) {
        alert(result.err);
      }
      setUsername(updatedUsername);
    } else if (name === "Description") {
      dispatch(updateUser({description: updatedDescription}));
      setDescription(updatedDescription);
    } 
  }

  return (
    <div className="infoContainer">
      <Row className="nameContainer">
        <div className="bold profileName">{user["name"]}</div>
        <div className="grey">@{user["username"]}</div>
      </Row>
      {
        editable && <Row>
          <div className="edit" onClick={handleShowEditUsername}>Edit Username</div>
          <EditModal
            name="Username"
            input="input"
            show={showEditUsername}
            handleClose={handleCloseEditUsername}
            value={updatedUsername}
            onChange={changeUpdatedUsername}
            handleSubmit={handleSubmit}
          />
        </Row>
      }
      
      <Row className="descriptionContainer">
        <div>
          {user["description"]}
        </div>
      </Row>
      {
        editable && <Row>
          <div className="edit" onClick={handleShowEditDescription}>Edit Description</div>
          <EditModal
            name="Description"
            input="text"
            show={showEditDescription}
            handleClose={(update) => handleCloseEditDescription(update)}
            value={updatedDescription}
            onChange={changeUpdatedDescription}
          />
        </Row>
      }
    </div>
  );
}

export default ProfileInfo;