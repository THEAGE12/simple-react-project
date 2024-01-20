import React from 'react';

import CustomerCard from "./components/CustomerCard";
import SideNavBar from "./components/SideNavBar";
import TopNavBar from "./components/TopNavBar";
import AddCustomerPage from "./webpage/AddCustomerPage";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import CustomerShowPage from './webpage/CustomerShowPage';
import { useState } from 'react';
import CustomerAllShowPage from './webpage/CustomerAllShowPage';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <Router>
      <div className="App">
        <TopNavBar setSearchResults={setSearchResults} />
        
        <SideNavBar />
        <Routes>
          <Route path="/" element={<CustomerCard />} />
          <Route path="/addcustomer" element={<AddCustomerPage />} />
          <Route
            path="/showcustomer"
            element={<CustomerShowPage searchResults={searchResults} />}
          />
          <Route
            path="/showallcustomer"
            element={<CustomerAllShowPage  />}
          />
        </Routes>
      </div>
      </Router>
  );
};

export default App;