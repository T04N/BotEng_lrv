import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
    return (
      <div className="sidebar bg-light p-3 historyChatSidebar">
        <ul className="list-unstyled">
          <li>Home</li>
          <li>Features</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;