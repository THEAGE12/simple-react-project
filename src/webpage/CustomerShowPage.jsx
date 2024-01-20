import React, {  useEffect } from 'react';
import  { useState } from 'react';
import axios from 'axios'
import TopNavBar from '../components/TopNavBar';
const CustomerShowPage = ({searchResults}) => {
  useEffect(() => {
    console.log('Received searchResults:', searchResults);
  }, [searchResults]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const handleDelete = async () => {
    try {
      // Perform delete operation for the selected customer
      
      const toSend = selectedCustomer.id
      
      await axios.post(`http://localhost:8000/delete-customer`, {
        toSend
        
      });

      TopNavBar.handleSearch('')

      // Close the confirmation modal
      setShowConfirmationModal(false);
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  const openConfirmationModal = (customer) => {
    setSelectedCustomer(customer);
    setShowConfirmationModal(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch data from the backend when the component mounts
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8000/get-data');
  //     const responseData = await response.json();

  //     console.log('API Response:', responseData);

  //     if (Array.isArray(responseData)) {
        
  //       setData(responseData);
  //     } else {
  //       console.error('API Response is not an array:', responseData);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

    return (
      
      <div>
      <div className="boundary" style={{ marginLeft: '300px' }}>
        
        <div className="card-container">
          
          {
          searchResults.message === "Data not found" ? (
            <p style={{ textAlign: 'center' }}>No results found.</p>
          ) : (
            searchResults.map((item, index) => (
              <div key={index} className="card">
                <div style={{ padding: '16px' }}>
                  <strong>Name:</strong> {item.name}<br />
                  <strong>Phone:</strong> {item.phone}<br />
                  <strong>ID:</strong> {item.id}<br />
                  <strong>Aadhaar:</strong> {item.aadhaar}<br />
                  <button onClick={() => openConfirmationModal(item)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showConfirmationModal && (
        
        <div className="confirmation-modal"   style={{
            marginLeft: '300px',
            
  position: 'fixed',
  top: '0',
  right: '45%',
  backgroundColor: '#44B09E',
  
  zindex: '9',
            content: {
              width: '300px',
              marjin: 'auto',
              textAlign: 'center',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#fff',
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
            }, }}   >
          <p>Are you sure you want to delete {selectedCustomer && selectedCustomer.name}?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={closeConfirmationModal}>No</button>
        </div>
      )}
    </div>
    );
              
  };

  export default CustomerShowPage;