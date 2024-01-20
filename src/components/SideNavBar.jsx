import React from 'react';

const SideNavBar = () => {
  const sidebarStyle = {
    height: '100%',
    width: '250px',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: '#111',
    padding: '15px',
    boxSizing: 'border-box',
    color: 'white',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    display: 'block',
    padding: '8px 16px',
    margin: '10px 0',
  };

  return (
    <div style={sidebarStyle}>
      <a href="/" style={linkStyle}>
        Home
      </a>
      <a href="/about" style={linkStyle}>
        About
      </a>
      <a href="/contact" style={linkStyle}>
        Contact
      </a>
      {/* Add more links as needed */}
    </div>
  );
};

export default SideNavBar;