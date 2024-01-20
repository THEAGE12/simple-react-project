import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const cardStyle = {
    
    padding: '10px',
    
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    top: '100px',
    left: '300px',
     // Adjust this value based on your needs
  };
const CustomerCard = () => {
  return (
    <div className="card" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">Sagar Saha</h5>
        <p className="card-text">depsaha97@gmail.com </p>
        <p className="card-text">7005062375</p>
        {/* Add more customer data fields as needed */}
      </div>
    </div>
  );
};

export default CustomerCard;