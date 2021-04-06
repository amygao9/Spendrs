
import { Modal } from "react-bootstrap";
import { useState } from "react";
// import { apiSignup } from "../../axios/home";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../reducers/loggedInReducer';
import PasswordStrengthBar from 'react-password-strength-bar';


function RegistrationModal(props) {
  const dispatch = useDispatch();

  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setStrength] = useState(0)

  // Used to indicate to users about errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  function resetErrors() {
    setNameError("");
    setEmailError("");
    setUsernameError("");
    setPasswordError("");
    setErrorMessage("");
  }

  function setErrors(err) {
    setErrorMessage(err);
    if (err.includes("Name")) setNameError("redErrorBorder")
    if (err.includes("Email")) setEmailError("redErrorBorder")
    if (err.includes("Username")) setUsernameError("redErrorBorder")
    if (err.includes("Password")) setPasswordError("redErrorBorder")

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetErrors();

    try{
      dispatch(signup(name, email, username, password, passwordStrength));
      history.push("/dashboard");
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} id={"registrationModal"}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className={"redErrorText"}>{errorMessage}</p>
        <form onSubmit={e => { handleSubmit(e) }}>
          <input className={"inputBox " + nameError} type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder={"Name"}/>
          <input className={"inputBox " + emailError} type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={"Email"}/>
          <input className={"inputBox " + usernameError} type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder={"Username"}/>
          <input className={"inputBox " + passwordError} type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder={"Password"}/>
          <PasswordStrengthBar password={password} style={{width: '300px', margin: 'auto'}} onChangeScore={setStrength}/>
          <input type="submit" id="createAccBtn" value="Create Account" />
        </form>

       </Modal.Body>
    </Modal>
  );
  }
  
  export default RegistrationModal;