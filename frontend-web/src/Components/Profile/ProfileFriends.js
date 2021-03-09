import React from "react";
import {Modal, ListGroup, Image} from "react-bootstrap";

function ProfileFriends(props) { 
    
    const getList = () => {
        return props.data.map(user => {
          return <ListGroup.Item>{user}</ListGroup.Item>
        })
      }

    return (
        <Modal show={props.show} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>Followers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
            {getList()}
        </ListGroup>
        </Modal.Body>
      </Modal>
    );
  }


  
  export default ProfileFriends;