import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

// Main App component
const App = () => {
  const [tickets, setTickets] = useState([]); // State for ticket data
  const [users, setUsers] = useState([]); // State for user data

  // State for grouping and sorting, initialized from localStorage or defaults
  const [groupBy, setGroupBy] = useState(localStorage.getItem("groupBy") || "status");
  const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "priority");

  // Fetch data for tickets and users from the API when the component loads
  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        setTickets(data.tickets); // Set ticket data
        setUsers(data.users); // Set user data
      });
  }, []); // Empty dependency array ensures this runs only once

  // Save groupBy and sortBy settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("sortBy", sortBy);
  }, [groupBy, sortBy]);

  return (
    <div className="App">
      {/* Header for dropdown menus to set grouping and sorting */}
      <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      {/* Kanban board to display tickets grouped and sorted */}
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
