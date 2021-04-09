import React from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Modal, Button } from "react-bootstrap";
import {deleteUser} from "../../axios/user";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
function DeleteModal(props) {
  const dispatch = useDispatch();
  const history = useHistory();

    const handleDelete = () => {
      
      deleteUser().then((data) => {
        Cookies.remove('jwt');
        dispatch({ type: 'home/logout' });
        history.push("/");
        
      }).catch(err => {
        console.log("err: " + err)
      })
        
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
          
          <Button className="settingsButton" onClick={() => handleDelete()}>Delete</Button>
        </Modal.Body>
      </Modal>
    );
}

export default DeleteModal;