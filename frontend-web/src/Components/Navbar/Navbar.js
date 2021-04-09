import React, { useState, useRef, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";
import SearchBar from "./searchBar";

import { FaBars } from "react-icons/fa";

function StatusString(props) {
  let statusString;
  if (props.search == "") {
    statusString = "please search something";
  } else if (props.results.length == 0) {
    statusString = "No results found";
  } else {
    return null;
  }
  return <p className="searchText">{statusString}</p>;
}

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
    <>
      <nav className="main"></nav>
      <div className="fixed shadowSmall">
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
          <SearchBar />
          {getLinks()}
          {getSlide()}
        </nav>
      </div>
    </>
  );
}
