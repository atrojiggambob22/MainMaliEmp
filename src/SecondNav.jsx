import React, { useState } from 'react';
import './SecNav.css'; // Replace with your CSS file

const SecondNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      

      {/* ☰ Hamburger only shows when menu is closed */}
      {!isOpen && (
        <button className="menu-toggle" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      )}

      {/* Overlay for dark background */}
      <div
        className={`mobile-overlay ${isOpen ? 'show' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Nav Drawer */}
      <div className={`seconnav ${isOpen ? 'open' : ''}`}>
        <div className="navbar-header">
          <div className="logo">Mali Empire Festival</div>
          {/* × Close button (only shows inside nav) */}
          <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        </div>

        <ul className="nav-links">
          <li>Festival Drumbeat</li>
          <li>Royal Fest</li>
          <li>The Golden Route</li>
          <li>Dress Like Royalty</li>
          <li>Secure Your Spot</li>
        </ul>

        <div className="owners-hub">
          <span>Owners Hub</span>
        </div>
      </div>
    </>
  );
};

export default SecondNav;
