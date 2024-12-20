import React, { useState } from 'react';
import axios from 'axios';

const Transfer = () => {
  const [amount, setAmount] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTransfer = async (e) => {
    e.preventDefault();

    if (amount <= 0) {
      setMessage('Amount must be greater than zero.');
      return;
    }
    if (!recipientAccount.trim()) {
      setMessage('Recipient account cannot be empty.');
      return;
    }

    try {
      setLoading(true);
      setMessage('');

      const token = localStorage.getItem('token');
      if (!token) {
        setMessage('User not authenticated. Please log in.');
        setLoading(false);
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/api/transfer',
        { recipientAccount, amount },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(response.data.message || 'Transfer Successful!');
      setAmount('');
      setRecipientAccount('');
    } catch (error) {
      console.error(error);
      if (error.response) {
        setMessage(error.response.data.message || 'Transfer Failed.');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      flex: 1,
      maxWidth: '400px',
      margin: '50px auto',
      padding: '25px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e0e0e0',
    },
    heading: {
      fontSize: '26px',
      marginBottom: '25px',
      color: '#333333',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '14px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      transition: 'border-color 0.3s ease',
      outline: 'none',
      fontFamily: 'inherit',
    },
    button: {
      padding: '14px',
      fontSize: '18px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    buttonDisabled: {
      backgroundColor: '#ddd',
      cursor: 'not-allowed',
    },
    buttonHover: {
      backgroundColor: '#45a049',
      transform: 'translateY(-2px)',
    },
    message: {
      marginTop: '15px',
      padding: '12px',
      borderRadius: '6px',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '1.5',
    },
    successMessage: {
      backgroundColor: '#eaffea',
      color: '#4CAF50',
      border: '1px solid #4CAF50',
    },
    errorMessage: {
      backgroundColor: '#ffe5e5',
      color: '#d8000c',
      border: '1px solid #d8000c',
    },
    footer: {
      marginTop: 'auto',
      padding: '15px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
      borderTop: '1px solid #ddd',
      fontSize: '14px',
      color: '#666666',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Transfer Funds</h1>
        <form onSubmit={handleTransfer} style={styles.form}>
          <input
            type="text"
            placeholder="Recipient Account"
            value={recipientAccount}
            onChange={(e) => setRecipientAccount(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            style={styles.input}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              ...(loading ? styles.buttonDisabled : {}),
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = loading
                ? styles.buttonDisabled.backgroundColor
                : styles.button.backgroundColor)
            }
          >
            {loading ? 'Processing...' : 'Transfer'}
          </button>
        </form>
        {message && (
          <p
            style={{
              ...styles.message,
              ...(message.includes('Failed')
                ? styles.errorMessage
                : styles.successMessage),
            }}
          >
            {message}
          </p>
        )}
      </div>
      <footer style={styles.footer}>
      </footer>
    </div>
  );
};

export default Transfer;
