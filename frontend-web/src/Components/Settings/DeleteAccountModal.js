import React, { useState } from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Modal, Button } from "react-bootstrap";

function DeleteModal(props) {

    const handleDelete = () => {
        console.log("confirm delete")
    }
    return (
      <Modal
        {...props}

        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Please confirm to delete this account. This action cannot be undone.</h5>
          
          <Button className="settingsButton" variant="outline-danger" onClick={() => handleDelete()}>Delete</Button>
        </Modal.Body>
      </Modal>
    );
}

export default DeleteModal;