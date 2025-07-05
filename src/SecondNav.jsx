import React, { useState } from 'react';
import './SecNav.css'; // Replace with your CSS file
import { useNavigate } from 'react-router-dom';

const SecondNav = () => {
  const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();

        const goHome = () => {
            navigate('/');
        }
          const gotoFestivalDrumbeatPage = () => {
            navigate('/FestivalDrumbeat');
        }
        
         const gotoTheGoldenRoute = () => {
            navigate('/TheGoldenRoute');
        } 
        
        const gotoRoyalFest = () => {
            navigate('/RoyalFest');
        } 
        
        const gotoDressLikeRoyalty = () => {
            navigate('/DressLikeRoyalty');
        }
        
        const gotoSecureYourSpot = () => {
            navigate('/SecureYourSpot');
        }
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
          <li onClick={goHome}>Home</li>
          <li onClick={gotoFestivalDrumbeatPage}>Festival Drumbeat</li>
          <li onClick={gotoRoyalFest}>Royal Fest</li>
          <li onClick={gotoTheGoldenRoute}>The Golden Route</li>
          <li onClick={gotoDressLikeRoyalty}>Dress Like Royalty</li>
          <li onClick={gotoSecureYourSpot}>Secure Your Spot</li>
        </ul>

        <div className="owners-hub">
          <span>Owners Hub</span>
        </div>
      </div>
    </>
  );
};

export default SecondNav;
