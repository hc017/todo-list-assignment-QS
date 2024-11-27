import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem("groupBy") || "status");
  const [sortBy, setSortBy] = useState(localStorage.getItem("sortBy") || "priority");

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("sortBy", sortBy);
  }, [groupBy, sortBy]);

  return (
    <div className="App">
      <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
