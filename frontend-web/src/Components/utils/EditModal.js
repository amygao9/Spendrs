import React from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Modal, Button } from "react-bootstrap";

function EditModal({name, input, show, handleClose, value, onChange}) {

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {name}
          { 
            input === "input" ? <input value={value} onChange={onChange} />
            : <textarea value={value} onChange={onChange} />
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClose(true)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditModal;