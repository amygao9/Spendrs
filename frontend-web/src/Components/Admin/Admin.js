import React, { useEffect, useState } from "react";
import '../../styles/admin.css';
import { adminLinks, users } from "../../constants";
import Navbar from "../Navbar/Navbar";
import User from "./User";
import { Button} from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from "react-redux";
import {getAllUsers} from "../../axios/admin";

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
        const newList = userList.filter((user) => user.username !== username);
 
        setUsers(newList);
    }
    const logout = () => {
        Cookies.remove('jwt');
        dispatch({ type: 'home/logout' });
        history.push("/");
      }
    function handleClick(username) {
        console.log(username);
    }
    const getUsers = () => {
        console.log("userlist :>> ",userList)
        return userList.map(user => {
          return <User key = {user.userName} user = {user} handleDelete = {handleDelete} handleClick = {handleClick}/>
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