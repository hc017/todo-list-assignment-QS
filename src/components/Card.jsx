import React from "react";
import "./Card.css";

// Card component to display ticket details and user info
const Card = ({ ticket, users }) => {
  // Find the user associated with the ticket, default to an empty object if not found
  const user = users.find((user) => user.id === ticket.userId) || {};
  
  return (
    <div className="card">
      {/* Header section of the card */}
      <div className="card-header">
        {/* Display ticket ID */}
        <div className="ticket-id">
          <span>{ticket.id}</span>
        </div>
        
        {/* Show user avatar or a default image if not available */}
        <div className="user-avatar">
          <img
            src={user.avatar || "default-avatar.png"}
            alt="User Avatar"
            className="avatar"
          />
        </div>
      </div>

      {/* Body section of the card */}
      <div className="card-body">
        {/* Display ticket title and description */}
        <h4 className="ticket-title">{ticket.title}</h4>
        <p className="ticket-description">{ticket.description}</p>
      </div>

      {/* Footer section of the card */}
      <div className="card-footer">
        {/* Show priority and status badges */}
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
