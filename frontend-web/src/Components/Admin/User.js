import * as React from "react";
import '../../styles/admin.css';
import { Button } from "react-bootstrap";
function User(props) {
    const user = props.user

    return (
        
        <div id = "users" class="list-group-item d-flex justify-content-between align-items-center">
            <h5 class="mb-">{user.firstname} {user.lastname}</h5>
            <p class="mb-1">{user.username}</p>
            <p class="mb-1">{user.email}</p>
            <p class="mb-1">{user.register_date}</p>
            <Button onClick={() => props.handleDelete(user.username)} class="btn-default" id = "deleteButton"> Delete user</Button>
        </div>
    );
}
export default User;