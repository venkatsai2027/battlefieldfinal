import './right.css';
import React, { useState } from 'react';

const Right = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`sidebar ${isHovered ? 'sidebar-open' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="icon">&#9776;</div> {/* Unicode for a menu icon */}
      <div className="sidebar-content">
        <div className='squad'>
          <span>Squad</span>
          <img src='BF4__logo.png' alt='' />
          <button>Squad Join</button>
        </div>
        <div className='online'>
          <span>Player 1</span>
          <button>Online</button>
        </div>
        <div className='offline'>
          <span>Player 2</span>
          <button>Offline</button>
        </div>
      </div>
    </div>
  );
}

export default Right;
