import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">TimeTry</div>
      <nav>
        <ul className="nav-menu">
          <li className="nav-item">
            <span>🏠</span>
            Home
          </li>
          <li className="nav-item">
            <span>📋</span>
            Projects
          </li>
          <li className="nav-item">
            <span>⚙️</span>
            Settings
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 