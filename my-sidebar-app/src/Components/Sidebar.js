import React, { useState, useEffect } from 'react';
import { FaBars, FaHome, FaBuilding, FaDollarSign, FaCoins, FaHistory, FaWallet, FaBell, FaHeadset, FaCog, FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Sidebar.css';

// Sidebar navigation items array
const SidebarNavItems = [
  { name: 'Home', icon: <FaHome /> },
  { name: 'Organization', icon: <FaBuilding /> },
  { name: 'Assets', icon: <FaCoins /> },
  { name: 'Trade', icon: <FaDollarSign /> },
  { name: 'History', icon: <FaHistory /> },
  { name: 'Wallet', icon: <FaWallet /> },
  { name: 'Notifications', icon: <FaBell />, gap: true },
  { name: 'Support', icon: <FaHeadset /> },
  { name: 'Setting', icon: <FaCog /> },
];

function Sidebar() {

  const [activeItem, setActiveItem] = useState('Home');
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 768);



  useEffect(() => {
    function handleResize() {
      // Automatically collapse sidebar on smaller screens
      if (window.innerWidth <= 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call the function to set initial state based on current window size
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <IconContext.Provider value={{ className: 'react-icons', style: { fontSize: '24px' } }}>
      <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars className="hamburger-icon" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        {SidebarNavItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${activeItem === item.name ? 'active' : ''} ${item.gap ? 'gap' : ''}`}
            onClick={() => setActiveItem(item.name)}
          >
            {item.icon}
            <span className="nav-text">{item.name}</span>
          </div>
        ))}

      </div>
    </IconContext.Provider>
  );
}

export default Sidebar;
