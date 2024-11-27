import React from "react";
import "./Card.css";

const Card = ({ ticket, users }) => {
  const user = users.find((user) => user.id === ticket.userId) || {};
  
  return (
    <div className="card">
      <div className="card-header">
        <div className="ticket-id">
          <span>{ticket.id}</span>
        </div>
        <div className="user-avatar">
          <img
            src={user.avatar || "default-avatar.png"}
            alt="User Avatar"
            className="avatar"
          />
        </div>
      </div>

      <div className="card-body">
        
        <h4 className="ticket-title">{ticket.title}</h4>
        <p className="ticket-description">{ticket.description}</p>
      </div>

      <div className="card-footer">
        <div className="badge priority-badge">
          <span>{ticket.priority}</span>
        </div>
        <div className="badge status-badge">
          <span>{ticket.status}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
