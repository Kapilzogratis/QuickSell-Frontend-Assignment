import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayButton from './DisplayButton';
import TicketCard from './TicketCard';
import '../styles/KanbanBoard.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'priority');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('ordering', ordering);
  }, [grouping, ordering]);

  const groupTickets = () => {
    let grouped = {};
    
    if (grouping === 'status') {
      grouped = tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        if (!acc[status]) acc[status] = [];
        acc[status].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      grouped = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        const userName = user ? user.name : 'Unassigned';
        if (!acc[userName]) acc[userName] = [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      const priorityNames = {
        4: 'Urgent',
        3: 'High',
        2: 'Medium',
        1: 'Low',
        0: 'No priority'
      };
      grouped = tickets.reduce((acc, ticket) => {
        const priority = priorityNames[ticket.priority];
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(ticket);
        return acc;
      }, {});
    }

    // Sort tickets within each group
    Object.keys(grouped).forEach(key => {
      grouped[key].sort((a, b) => {
        if (ordering === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return grouped;
  };

  const handleGroupingChange = (value) => {
    setGrouping(value);
  };

  const handleOrderingChange = (value) => {
    setOrdering(value);
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      <DisplayButton 
        grouping={grouping}
        ordering={ordering}
        onGroupingChange={handleGroupingChange}
        onOrderingChange={handleOrderingChange}
      />
      <div className="board-columns">
        {Object.entries(groupedTickets).map(([group, tickets]) => (
          <div key={group} className="board-column">
            <div className="column-header">
              <h2>{group}</h2>
              <span className="ticket-count">{tickets.length}</span>
            </div>
            <div className="column-tickets">
              {tickets.map(ticket => (
                <TicketCard 
                  key={ticket.id} 
                  ticket={ticket}
                  user={users.find(u => u.id === ticket.userId)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;