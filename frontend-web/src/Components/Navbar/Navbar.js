import React, { useState } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

import { FaBars } from "react-icons/fa";

export default function Navbar(props) {
  const links = props.links;

  const [open, setOpen] = useState(false);

  const getSlide = () => {
    const navLinks = Object.entries(links).map((link) => {
      return (
        <NavLink
          key={link[0]}
          to={link[0]}
          className="popOutNavlink"
          activeClassName="popOutlinkActive"
        >
          {link[1]}
        </NavLink>
      );
    });

    return (
      <CSSTransitionGroup
        transitionName="side"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {open && (
          <div className="popOutNav">
            <FaBars
              className="faBars"
              onClick={() => {
                setOpen(!open);
              }}
            />
            {navLinks}
          </div>
        )}
      </CSSTransitionGroup>
    );
  };

  const getLinks = () => {
    const navLinks = Object.entries(links).map((link) => {
      return (
        <NavLink
          key={link[0]}
          to={link[0]}
          className="linkDefault"
          activeClassName="linkActive"
        >
          {link[1]}
        </NavLink>
      );
    });
    return <div className="navBlock">{navLinks}</div>;
  };

  return (
    <div className="fixed">
      <nav className="main">
        <NavLink to="" className="title">
          <h1>SpendR</h1>
        </NavLink>
        {!open && (
          <FaBars
            className="faBars"
            onClick={() => {
              setOpen(!open);
            }}
          />
        )}
        <label>
          <input id="navText" type="text" placeholder="Search" />
        </label>
        {getLinks()}
        {getSlide()}
      </nav>
    </div>
  );
}
