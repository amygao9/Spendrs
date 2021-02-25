import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

import { FaBars } from "react-icons/fa";

export default function Navbar(props) {
  const links = props.links;

  const getLinks = () => {
    const navLinks = Object.entries(links).map(link => {
      return (
        <NavLink key={link[0]} to={link[0]} className="linkDefault" activeClassName="linkActive">
          {link[1]}
        </NavLink>
      )
    })
    return (
      <div className="navBlock">
        {navLinks}
      </div>
    )
  }

  return (
    <>
      <nav className="main">
        <NavLink to="">
          <h1>SpendR</h1>
        </NavLink>
        <FaBars className="faBars" />
        {getLinks()}
      </nav>
    </>
  );
}
