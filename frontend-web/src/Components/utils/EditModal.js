import React from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Modal, Button } from "react-bootstrap";

function EditModal({name, input, show, handleClose, value, onChange, handleSubmit}) {

  const submitChanges = (e, name) => {
    handleClose(true);
    handleSubmit(e, name);
  }

  return (
    <div>
      <Modal className="modalContainer" show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {name}</Modal.Title>
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
          <Button variant="primary" onClick={(e) => submitChanges(e, name)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditModal;