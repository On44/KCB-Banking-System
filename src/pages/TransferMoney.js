import React, { useState } from 'react';
import axios from 'axios';

const TransferMoney = () => {
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');
  const [status, setStatus] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/transfer-money', {
        amount,
        account,
      });
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Transfer failed, please try again.');
    }
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
  };

  const formStyle = {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '20px',
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
      <div style={formStyle}>
        <h2>Transfer Money</h2>
        <form onSubmit={handleTransfer}>
          <label style={labelStyle}>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={inputStyle}
            required
          />
          <label style={labelStyle}>Account</label>
          <input
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            Transfer
          </button>
        </form>
        {status && <p>{status}</p>}
      </div>
      <footer style={footerStyle}>
      </footer>
    </div>
  );
};

export default TransferMoney;
