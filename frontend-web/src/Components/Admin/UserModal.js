import * as React from "react";
import '../../styles/admin.css';
import { Modal } from "react-bootstrap";
import ProfileDescription from "../Profile/ProfileDescription";
function UserModal(props) {
    const user = props.user
    const path = window.location.pathname;
    const editable = path === '/profile';
    return (
        <Modal className = "userModal shadowMedium" show={props.show} onHide={props.handleClose}>
                <ProfileDescription editable={editable} user={user}/>
        </Modal>
    
    );
}
export default UserModal;