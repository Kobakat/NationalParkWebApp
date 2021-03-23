import "./search-bar.css";
import { React, useState, useEffect } from "react";
function SearchBar({ getData, getParkData }) {
  const [query, setQuery] = useState("");
  const [param, setParam] = useState("");

  const onSearchBarChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    getParkData(query, param);
  };

  const handleChangeDropDown = (e) => {
    setParam(e.target.value);
    console.log(`Param is now set to: ${param}`);
  };

  const handleChangeSearchBar = (e) => {
    setQuery(e.target.value);
    console.log(`Search is now set to: ${query}`);
  };

  return (

    <div className="search-container">
      <form action="" onSubmit={onSubmitForm}>
        <div className="search-name-container">
          <label className="name-input-label" for="name">
            Park Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Yellowstone"
            onChange={handleChangeSearchBar}
          />
        </div>
        <span>or</span>
        <div className="select-state-container">
          <label className="select-state-label" for="state">
            State
          </label>
          <select name="stateSelect" id="state">
            <option value="" disabled selected>
              State
            </option>
          </select>
        </div>
        <div className="select-activity-container">
          <label className="select-activity-label" for="activity">
            Activity
          </label>
          <select name="activitySelect" id="activity">
            <option value="" disabled selected>
              Activity
            </option>
          </select>
        </div>
        <div className="select-topic-container">
          <label className="select-topic-label" for="topic">
            Topics
          </label>
          <select name="topicSelect" id="topic">
            <option value="" disabled selected>
              Topic
            </option>
          </select>
        </div>
        <button type="submit" value="Submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
