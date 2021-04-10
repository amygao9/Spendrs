import React, { useState } from "react";
import '../../styles/home.css';
import '../../styles/profile.css';
import { Modal } from "react-bootstrap";
import PasswordStrengthBar from 'react-password-strength-bar';
import { changePassword } from '../../reducers/userDataReducer';
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";

function PasswordModal(props) {
    const [oldpass, setOldPass] = useState("");
    const [confirmpass, setConfirmPass] = useState("");
    const [password, setPassword] = useState("");
    const [passwordStrength, setStrength] = useState(0);
    const [passError, setPassError] = useState("");
    const dispatch = useDispatch();
    const alert = useAlert();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const result = await dispatch(changePassword(oldpass, password, confirmpass, passwordStrength));
      if (result && result.err) {
        setPassError(result.err);
      } else {
        alert.success("Change password successful!");
        props.onHide();
      }
    }
    return (
      <Modal
        {... props}
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
            <p className={"redErrorText"}>{passError}</p>
            <input type="submit" id="createAccBtn" value="Reset Password" />
            </form>
          
        </Modal.Body>
      </Modal>
    );
}

export default PasswordModal;