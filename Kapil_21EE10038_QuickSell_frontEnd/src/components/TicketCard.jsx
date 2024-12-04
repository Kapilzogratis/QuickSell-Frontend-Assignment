import React from 'react';
import { PriorityIcons } from '../utils/icons';
import { getPriorityName } from '../utils/priorityUtils';
import '../styles/TicketCard.css';

const TicketCard = ({ ticket, user }) => {
  const PriorityIcon = PriorityIcons[getPriorityName(ticket.priority)];

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            <div className="avatar">
              {user.name.charAt(0)}
              <span className={`status-dot ${user.available ? 'available' : 'away'}`}></span>
            </div>
          </div>
        )}
      </div>
      <div className="ticket-title">
        <h3>{ticket.title}</h3>
      </div>
      <div className="ticket-footer">
        <span className="priority-icon">
          <PriorityIcon />
        </span>
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            <span className="tag-dot" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TicketCard;