
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
function RegistrationModal(props) {
  
    return (
      
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Create New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <input className="inputBox" type="text" name="firstname" placeholder={"Firstname"}></input>
                <input className="inputBox" type="text" name="lastName" placeholder={"Lastname"}></input>
                <input className="inputBox" type="text" name="email" placeholder={"Email"}></input>
                <input className="inputBox" type="text" name="username" placeholder={"Username"}></input>
                <input className="inputBox" type="password" name="password" placeholder={"Password"}></input>
                <Link to="/dashboard">
                    <input className="inputBox" type={"submit"} id={"createAccBtn"} value={"Create Account"}/>
                </Link>
                
            </form>
        </Modal.Body>
    </Modal>
      
    );
  }
  
  export default RegistrationModal;