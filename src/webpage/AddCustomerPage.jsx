
import axios from 'axios'
import React, { useState } from 'react';

export default function CustomerCard() {

  const formStyle = {
    width: '400px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto', // Center the form on the page
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  const labelStyle = {
    marginBottom: '8px',
    fontWeight: 'bold',
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    boxSizing: 'border-box',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };
  
  const buttonStyle = {
    width: '60%',
    padding: '10px',
    backgroundColor: '#51e2f5',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    margin: '20px 0',
  };
    
const initialFormData = {
    name: '',
    phone: '',
    id: '',
    aadhaar: ''
  };
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        id: '',
        aadhaar: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post("http://localhost:8000/", {
            formData
          });
          setFormData(initialFormData);
        } catch (e) {
          console.log(e);
        }
      };
    
    
    

  return (
    <div className='cont'>
      


    

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <form action="POST" onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor="name" style={labelStyle}>
        Name:
      </label>
      <input type="text" onChange={handleChange} value={formData.name} id="name" name="name" required style={inputStyle} />

      <label htmlFor="phone" style={labelStyle}>
        Phone:
      </label>
      <input type="text" onChange={handleChange} value={formData.phone} id="phone" name="phone" required style={inputStyle} />

      <label htmlFor="id" style={labelStyle}>
        CustomerID:
      </label>
      <input type="text" onChange={handleChange} value={formData.id} id="id" name="id" required style={inputStyle} />

      <label htmlFor="aadhaar" style={labelStyle}>
        Aadhaar:
      </label>
      <input type="text" onChange={handleChange} value={formData.aadhaar} id="aadhaar" name="aadhaar" required style={inputStyle} />

      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
    </div>
    </div>
  )

  }