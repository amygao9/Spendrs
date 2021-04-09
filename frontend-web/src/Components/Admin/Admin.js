import React, { useEffect, useState } from "react";
import '../../styles/admin.css';
import { adminLinks } from "../../constants";
import Navbar from "../Navbar/Navbar";
import User from "./User";
import { ListGroup } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {getAllUsers, deleteUser} from "../../axios/admin";

function Admin() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loaded, setLoaded] = useState(false)
    const [userList, setUsers] = useState([])
    useEffect( () => {
        getAllUsers().then((users) => {
            console.log("admin users: ", users)
            setUsers(users)
            
          }).catch(err => {
            console.log("err: " + err)
        })
        setLoaded(true);
          
    }, [])

    
    function handleDelete(username) {
        deleteUser(username).then((user) => {
            console.log("deleted: ", user)
            getAllUsers().then((users) => {
                console.log("admin users: ", users)
                setUsers(users)
                
              }).catch(err => {
                console.log("err: " + err)
            })
            
          }).catch(err => {
            console.log("err: " + err)
        })
    }
    
    const getUsers = () => {
        console.log("userlist :>> ",userList)
        return userList.map(user => {
            if (!user.admin) {
                return <User key = {user.username} user = {user} handleDelete = {handleDelete}/>
            }
        })
      }
    if (!loaded) {
        return (<div className='admin'> <Navbar links={adminLinks} /> </div>)
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