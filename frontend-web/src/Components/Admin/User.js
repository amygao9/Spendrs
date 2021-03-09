import * as React from "react";
import '../../styles/admin.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
function User(props) {
    const user = props.user

    return (
            <div id = "users" className="list-group-item d-flex justify-content-between align-items-center">
                <Link to={`/profile/${user.username}`}>
                    <h5 className="mb-">{user.name}</h5>
                </Link>
                <p className="mb-1">{user.username}</p>
                <p className="mb-1">{user.email}</p>
                <p className="mb-1">{user.register_date}</p>
                <Button onClick={() => props.handleDelete(user.username)} className="btn-default" id = "deleteButton"> Delete user</Button>
            </div>
        
        
    );
}
export default User;