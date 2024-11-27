import React, { useState } from "react";
import "./Header.css";
import DisplaySVG from "../assets/icons/Display.svg"; // Replace with the correct SVG file path

// Header component with dropdown for grouping and sorting options
const Header = ({ setGroupBy, setSortBy }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown visibility

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="display-dropdown">
        {/* Button to toggle the dropdown */}
        <button className="display-button" onClick={toggleDropdown}>
          <img src={DisplaySVG} alt="Display Options" className="svg-icon" />
          Display
        </button>

        {/* Show dropdown menu when `isDropdownOpen` is true */}
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {/* Dropdown option for grouping items */}
            <div className="dropdown-item">
              <label>Grouping:</label>
              <select
                onChange={(e) => setGroupBy(e.target.value)} // Update group by option
                defaultValue="status"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            {/* Dropdown option for ordering items */}
            <div className="dropdown-item">
              <label>Ordering:</label>
              <select
                onChange={(e) => setSortBy(e.target.value)} // Update sort by option
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
