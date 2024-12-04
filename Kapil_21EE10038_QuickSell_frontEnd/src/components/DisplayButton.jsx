import React, { useState } from 'react';
import { DisplayIcon, ChevronIcon } from '../utils/icons';
import '../styles/DisplayButton.css';

const DisplayButton = ({ grouping, ordering, onGroupingChange, onOrderingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="display-button-container">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <DisplayIcon />
        Display
        <ChevronIcon direction={isOpen ? 'up' : 'down'} />
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <span>Grouping</span>
            <select 
              value={grouping}
              onChange={(e) => onGroupingChange(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <span>Ordering</span>
            <select 
              value={ordering}
              onChange={(e) => onOrderingChange(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayButton;