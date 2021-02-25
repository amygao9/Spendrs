import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.css";

import { FaBars } from "react-icons/fa";

export default function Navbar(props) {
  return (
    <>
      <nav className="main">
        <NavLink to="">
          <h1>SpendR</h1>
        </NavLink>
        <FaBars className="faBars" />
        <div className="navBlock">
          <NavLink to="" className="linkDefault" activeClassName="linkActive">
            About
          </NavLink>
          <NavLink to="" className="linkDefault" activeClassName="linkActive">
            services
          </NavLink>
          <NavLink to="" className="linkDefault" activeClassName="linkActive">
            Contact
          </NavLink>
          <NavLink to="" className="linkDefault" activeClassName="linkActive">
            Sign Up
          </NavLink>
        </div>
      </nav>
    </>
  );
}
