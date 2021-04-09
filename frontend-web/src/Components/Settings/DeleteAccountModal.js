import React from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Modal, Button } from "react-bootstrap"; 
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { deleteUser } from "../../reducers/userDataReducer";

function DeleteModal(props) {
  const dispatch = useDispatch();
  const history = useHistory();

    const handleDelete = async () => {
      const result = await dispatch(deleteUser());
      console.log('result :>> ', result);
      if (result.err) {
        alert(result.err);
      } else {
        alert("Delete Successful");
        Cookies.remove('jwt');
        dispatch({ type: 'home/logout' });
        history.push("/");
      }
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