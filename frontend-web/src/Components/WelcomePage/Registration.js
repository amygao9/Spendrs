
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { apiSignup } from "../../axios/home";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function RegistrationModal(props) {
  const dispatch = useDispatch();

  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await apiSignup(name, email, username, password);
    history.push("/dashboard");
    dispatch({ type: 'LOGIN' });
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={e => { handleSubmit(e) }}>
          <input className="inputBox" type="text" name="name" value={name} onChange={e =>setName(e.target.value)} placeholder={"Name"}></input>
          <input className="inputBox" type="text" name="email" value={email} onChange={e =>setEmail(e.target.value)} placeholder={"Email"}></input>
          <input className="inputBox" type="text" name="username" value={username} onChange={e =>setUsername(e.target.value)} placeholder={"Username"}></input>
          <input className="inputBox" type="password" name="password" value={password} onChange={e =>setPassword(e.target.value)} placeholder={"Password"}></input>
          <input type="submit" id="createAccBtn" value="Create Account" />
        </form>
       </Modal.Body>
    </Modal>
  );
  }
  
  export default RegistrationModal;