import React, { useState } from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Modal, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../reducers/loggedInReducer';
import PasswordStrengthBar from 'react-password-strength-bar';
function PasswordModal(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [oldpass, setOldPass] = useState("");
    const [confirmpass, setConfirmPass] = useState("");
    const [password, setPassword] = useState("");
    const [passwordStrength, setStrength] = useState(0)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("new password: ", confirmpass)
    
        // try{
        //   dispatch(signup(name, email, username, password, passwordStrength));
        //   history.push("/dashboard");
        // } catch (err) {
        //   setErrors(err);
        // }
    }
    return (
      <Modal
        {...props}

        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reset Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Please enter old password to reset password</h5>
          
            <form onSubmit={e => { handleSubmit(e) }}>
            <input className={"inputBox " } type="password" name="password" value={oldpass} onChange={e => setOldPass(e.target.value)} placeholder={"Old Password"}/>
            <input className={"inputBox " } type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={"New Password"}/>
            <input className={"inputBox " } type="password" name="password" value={confirmpass} onChange={e => setConfirmPass(e.target.value)} placeholder={"Confirm New Password"}/>
            <PasswordStrengthBar password={password} style={{width: '300px', margin: 'auto'}} onChangeScore={setStrength}/>
            <input type="submit" id="createAccBtn" value="Reset Password" />
            </form>
          
        </Modal.Body>
      </Modal>
    );
}

export default PasswordModal;