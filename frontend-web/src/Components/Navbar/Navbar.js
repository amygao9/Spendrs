import React, { useState, useRef, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

// switch to redux later
import client from "../../axios/auth";
import { BASE_URL } from "../../base_url";

import { FaBars } from "react-icons/fa";

export default function Navbar(props) {
  const links = props.links;

  const [open, setOpen] = useState(false);

  const [focused, setFocused] = useState(false);

  const [results, setResults] = useState([]);

  const [search, setSearch] = useState("");

  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const onFocus = () => setFocused(true);

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
          <div ref={ref}>
            <label className="searchBar">
              <input
                autoComplete="off"
                id="navText"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    client
                      .get(BASE_URL + "/api/users/findUser/" + e.target.value)
                      .then((res) => {
                        setResults(res.data);
                      });
                  } else {
                    setResults([]);
                  }
                  setSearch(e.target.value);
                }}
                onFocus={onFocus}
              />
            </label>
            {focused && (
              <div
                style={{
                  backgroundColor: "grey",
                  position: "relative",
                  top: "-30px",
                  left: "15px",
                  padding: "30px 20px 10px 20px",
                  zIndex: 1,
                  flexDirection: "column",
                  borderBottomRightRadius: "1rem",
                  borderBottomLeftRadius: "1rem",
                }}
              >
                {results.map((val, key) => {
                  console.log("/profile/" + val);
                  return (
                    <a
                      key={key}
                      style={{ display: "block" }}
                      href={"profile/" + val}
                    >
                      {val}
                    </a>
                  );
                })}
                <a href="/profile/a"> test</a>
              </div>
            )}
          </div>
          {getLinks()}
          {getSlide()}
        </nav>
      </div>
    </>
  );
}
