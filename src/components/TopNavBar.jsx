import React from 'react';
import {  NavLink } from 'react-router-dom'
import { useState } from 'react';

const TopNavBar = ({ setSearchResults }) => {

  const handleSearch = async ( searchTerm) => {
    
    try {
      
      
      const response = await fetch(`http://localhost:8000/get-data/customerdetails?name=${searchTerm}`);
      
      const data = await response.json();
      setSearchResults(data)
      
   
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  


  const [searchTerm, setSearchTerm] = useState('');


  
 

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  background: '#333',
  color: '#fff',
};

const linkContainerStyle = {
  display: 'flex',
  marginLeft: '250px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '12px',
  margin: '0 8px',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
};

const logoutButtonStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '12px',
  background: '#6b1d1d',
  borderRadius: '4px',
  transition: 'background-color 0.3s ease',
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '250px',
};

const searchInputStyle = {
  padding: '12px',
  marginRight: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const searchButtonStyle = {
  padding: '12px',
  background: '#4CAF50',
  color: '#fff',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};


  return (
    <div style={navStyle}>
      <div style={linkContainerStyle}>
        
     
        <NavLink to="/" style={linkStyle}>
          Back
        </NavLink>
        <NavLink to="/addcustomer" style={linkStyle}>
          Add Customer
        </NavLink>
        <NavLink to="/showcustomer" style={linkStyle}>
          Show Customer
        </NavLink>
        <NavLink to="/showallcustomer" style={linkStyle}>
          Show All Customer
        </NavLink>
      </div>
      <div style={searchContainerStyle}>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}  />
        <button onClick={() => handleSearch(searchTerm)} style={searchButtonStyle}>Search</button>
        
      </div>
      
      <a href="/logout" style={logoutButtonStyle}>
        Logout
      </a>
    </div>
  );
};

export default TopNavBar;
