import * as React from "react";
import '../../styles/admin.css';
import { adminLinks } from "../../constants";
import Navbar from "../Navbar/Navbar";
import User from "./User";
import {Modal, ListGroup, Image} from "react-bootstrap";
function Admin() {
    let data = [
        {
            firstname: "Alex",
            lastname: "Shih",
            username: "alexshih2018",
            email: "alexshih@gmail.com",
            register_date: "2021/03/05"
        },
        {
            firstname: "Jacky",
            lastname: "Yang",
            username: "yangjac",
            email: "jackyyang@gmail.com",
            register_date: "2021/03/06"
        }

    ]
    const [users, setUsers] = React.useState(data);
    function handleDelete(username) {
        console.log(username);
        const newList = users.filter((user) => user.username !== username);
 
        setUsers(newList);
    }
    const getUsers = () => {
        return users.map(user => {
          return <User user = {user} handleDelete = {handleDelete}/>
        })
      }
    return (
        <div class =  "admin">
            <Navbar links={adminLinks} />
            <div class = "userContainer">
                <h3>Registered Users</h3>
                <ListGroup>
                    {getUsers()}
                </ListGroup>

            </div>
        
        </div>
    );
}

export default Admin;