import React from "react";
import Card from "./Card";
import "./KanbanBoard.css";
import threedots from "../assets/icons/3 dot menu.svg";
import add from "../assets/icons/add.svg";


const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
  const groupTickets = (tickets) => {
    switch (groupBy) {
      case "status":
        return tickets.reduce((acc, ticket) => {
          acc[ticket.status] = acc[ticket.status] || [];
          acc[ticket.status].push(ticket);
          return acc;
        }, {});
      case "user":
        return tickets.reduce((acc, ticket) => {
          acc[ticket.userId] = acc[ticket.userId] || [];
          acc[ticket.userId].push(ticket);
          return acc;
        }, {});
      case "priority":
        return tickets.reduce((acc, ticket) => {
          acc[ticket.priority] = acc[ticket.priority] || [];
          acc[ticket.priority].push(ticket);
          return acc;
        }, {});
      default:
        return {};
    }
  };

  const groupedTickets = groupTickets(tickets);

  const sortedTickets = (group) => {
    return group.sort((a, b) => {
      if (sortBy === "priority") return b.priority - a.priority;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((key) => (
        <div key={key} className="kanban-column">
          <div className="title">
          <img className="titleimg" src={threedots} alt="" />
          <h3>{key}</h3>
          <img className="titleadd" src={add} alt="" />
          <img className="titledot" src={threedots} alt="" />


          </div>
          {sortedTickets(groupedTickets[key]).map((ticket) => (
            <Card key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
