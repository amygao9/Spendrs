import React, { useEffect } from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Row, Modal, Button } from "react-bootstrap";

function EditModal({show, handleClose}) {
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input>
          
          </input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditModal;