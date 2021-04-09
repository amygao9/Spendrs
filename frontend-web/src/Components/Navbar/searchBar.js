import React, { useState, useRef, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

import { useSelector, useDispatch } from "react-redux";
import { getSearchResult } from "../../reducers/searchReducer";

// switch to redux later
import client from "../../axios/auth";
import { BASE_URL } from "../../base_url";

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

export default function SearchBar(props) {
  const [focused, setFocused] = useState(false);

  // const [results, setResults] = useState([]);

  const dispatch = useDispatch();

  const results = useSelector((state) => state.searchData.results);

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

  return (
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
              dispatch(getSearchResult(e.target.value));
            } else {
              dispatch(() => dispatch({ type: "search/clean" }));
            }
            setSearch(e.target.value);
          }}
          onFocus={() => setFocused(true)}
        />
      </label>
      {focused && (
        <div className="searchResults">
          <StatusString results={results} search={search} />
          {results.map((val, key) => {
            return (
              <a className="searchUser" key={key} href={"profile/" + val}>
                {val}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
