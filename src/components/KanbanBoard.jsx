import React from "react";
import Card from "./Card";
import "./KanbanBoard.css";
import threedots from "../assets/icons/3 dot menu.svg"; 
import add from "../assets/icons/add.svg"; 

// KanbanBoard component to display tickets grouped and sorted based on props
const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
  // Function to group tickets based on the selected grouping option
  const groupTickets = (tickets) => {
    switch (groupBy) {
      case "status": // Group tickets by their status
        return tickets.reduce((acc, ticket) => {
          acc[ticket.status] = acc[ticket.status] || [];
          acc[ticket.status].push(ticket);
          return acc;
        }, {});
      case "user": // Group tickets by the user ID
        return tickets.reduce((acc, ticket) => {
          acc[ticket.userId] = acc[ticket.userId] || [];
          acc[ticket.userId].push(ticket);
          return acc;
        }, {});
      case "priority": // Group tickets by their priority
        return tickets.reduce((acc, ticket) => {
          acc[ticket.priority] = acc[ticket.priority] || [];
          acc[ticket.priority].push(ticket);
          return acc;
        }, {});
      default: // Return an empty object if no grouping option is selected
        return {};
    }
  };

  // Get tickets grouped based on the `groupBy` option
  const groupedTickets = groupTickets(tickets);

  // Function to sort tickets within each group
  const sortedTickets = (group) => {
    return group.sort((a, b) => {
      if (sortBy === "priority") return b.priority - a.priority; // Sort by priority descending
      if (sortBy === "title") return a.title.localeCompare(b.title); // Sort alphabetically by title
      return 0; // Default: no sorting
    });
  };

  return (
    <div className="kanban-board">
      {/* Render columns for each group */}
      {Object.keys(groupedTickets).map((key) => (
        <div key={key} className="kanban-column">
          {/* Column header with title and icons */}
          <div className="title">
            <img className="titleimg" src={threedots} alt="" /> {/* Menu icon */}
            <h3>{key}</h3> {/* Group title */}
            <img className="titleadd" src={add} alt="" /> {/* Add icon */}
            <img className="titledot" src={threedots} alt="" /> {/* Another menu icon */}
          </div>
          {/* Render tickets in the group, sorted based on `sortBy` */}
          {sortedTickets(groupedTickets[key]).map((ticket) => (
            <Card key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
