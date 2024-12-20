import React, { useState } from 'react';
import axios from 'axios';

const RequestNewCard = () => {
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('');

  const handleRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/request-new-card', {
        reason,
      });
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Card request failed, please try again.');
    }
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const formContainerStyle = {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    margin: 'auto',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '1rem',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    backgroundColor: '#004d26',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const footerStyle = {
    backgroundColor: '#004d26',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: 'auto',
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h2>Request New Card</h2>
        <form onSubmit={handleRequest}>
          <label style={labelStyle}>Reason for Request</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            Request Card
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
      <footer style={footerStyle}>
      </footer>
    </div>
  );
};

export default RequestNewCard;
