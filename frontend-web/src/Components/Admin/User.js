import * as React from "react";
import '../../styles/admin.css';
import { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import UserModal from "./UserModal";
function User(props) {
    const user = props.user
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <div id = "users" className="list-group-item d-flex  align-items-center" >
                <div id = "userInfo" onClick={handleShow} >
                    <h5  className="mb-1">{user.name}</h5>
                    <p className="mb-1">Username: {user.username}</p>
                    <p className="mb-1">Email: {user.email}</p>
                    <p className="mb-1">Register Date:{user.register_date}</p>
                </div>
                <div>
                    <Button onClick={handleShow} className="btn-default" id = "profileButton"> View Profile</Button>
                    <Button onClick={() => props.handleDelete(user.username)} className="btn-default" id = "deleteButton"> Delete user</Button>
                </div>
                
            </div>
            <UserModal handleClose = {handleClose} show = {show} user = {user}/>

        </Container>
        
    );
}
export default User;