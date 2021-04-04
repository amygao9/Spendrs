import React, { useState } from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Row } from "react-bootstrap";
import EditModal from "../utils/EditModal";

function ProfileInfo({ editable, user }) {
  const [username, setUsername] = useState(user["username"]);
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [description, setDescription] = useState(user["description"]);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const [showEditUsername, setShowEditUsername] = useState(false);
  const [showEditDescription, setShowEditDescription] = useState(false);

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
            name="Edit Username"
            input="input"
            show={showEditUsername}
            handleClose={handleCloseEditUsername}
            value={updatedUsername}
            onChange={changeUpdatedUsername}
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
            name="Edit Description"
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