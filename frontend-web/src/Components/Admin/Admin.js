import * as React from "react";
import '../../styles/admin.css';
import { adminLinks, users } from "../../constants";
import Navbar from "../Navbar/Navbar";
import User from "./User";
import { ListGroup } from "react-bootstrap";

function Admin() {
    const [userList, setUsers] = React.useState(Object.values(users));
    function handleDelete(username) {
        console.log(username);
        const newList = userList.filter((user) => user.username !== username);
 
        setUsers(newList);
    }
    
    function handleClick(username) {
        console.log(username);

    }
    const getUsers = () => {
        console.log(userList)
        return userList.map(user => {
          return <User key = {user.userName} user = {user} handleDelete = {handleDelete} handleClick = {handleClick}/>
        })
      }
    return (
        <div className =  "admin">
            <Navbar links={adminLinks} />
            <div className = "userContainer">
                <h3>Registered Users</h3>
                <ListGroup>
                    {getUsers()}
                </ListGroup>

            </div>
        
        </div>
    );
}

export default Admin;