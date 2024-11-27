import React, { useState } from "react";
import "./Header.css";
import DisplaySVG from "../assets/icons/Display.svg"; // Replace with the correct SVG file path

const Header = ({ setGroupBy, setSortBy }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="display-dropdown">
        <button className="display-button" onClick={toggleDropdown}>
          <img src={DisplaySVG} alt="Display Options" className="svg-icon" />
          Display
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <label>Grouping:</label>
              <select
                onChange={(e) => setGroupBy(e.target.value)}
                defaultValue="status"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-item">
              <label>Ordering:</label>
              <select
                onChange={(e) => setSortBy(e.target.value)}
                defaultValue="priority"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
