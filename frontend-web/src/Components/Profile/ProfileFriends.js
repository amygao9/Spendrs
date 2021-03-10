import React from "react";
import { Modal, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfileFriends(props) {
    
    const getList = () => {
        return props.data.map((user, index) => {
          if (props.isAdmin) {
            return  <ListGroup.Item key={index}>
                      {user}
                  </ListGroup.Item>
          }
          else {
            return  <ListGroup.Item key={index}>
                    <Link to={`/profile/${user}`}>
                      {user}
                    </Link>
                  </ListGroup.Item>
          }
        })
      }
    return (
        <Modal show={props.show} onHide={props.handleclose} className = "modalContainer">
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