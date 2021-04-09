import * as React from "react";
import '../../styles/admin.css';
import { useState } from 'react';
import { Button, Container } from "react-bootstrap";
function User(props) {
    const user = props.user

    return (
        <Container>
            <div id = "users" className="list-group-item d-flex  align-items-center" >
                <div id = "userInfo"  href = {"/profile/"+ user.username}>
                    <h5  className="mb-1">{user.name}</h5>
                    <p className="mb-1">Username: {user.username}</p>
                    <p className="mb-1">Email: {user.email}</p>
                    <p className="mb-1">Register Date: {user.createdAt.slice(0,10)}</p>
                </div>
                <div>
                    <Button className="btn-default" id = "profileButton" href = {"/profile/"+ user.username}> View Profile</Button>
                    <Button onClick={() => props.handleDelete(user.username)} className="btn-default" id = "deleteButton"> Delete user</Button>
                </div>
                
            </div>

        </Container>
        
    );
}
export default User;