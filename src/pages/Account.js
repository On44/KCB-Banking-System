import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Account = () => {
  const [accountDetails, setAccountDetails] = useState(null);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const response = await axios.get('http://localhost:5000/api/account', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAccountDetails(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch account details');
      }
    };

    fetchAccountDetails();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headerStyle}>Your Account</h1>
        {accountDetails ? (
          <div>
            <p>Account Number: {accountDetails.accountNumber}</p>
            <p>Balance: KSh {accountDetails.balance}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
        </p>
      </footer>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', // Full page height
  paddingBottom: '40px', // Space for the footer
};

const contentStyle = {
  textAlign: 'center',
  padding: '20px',
  flexGrow: 1, // Ensures the content takes available space
};

const headerStyle = {
  marginBottom: '30px', // Space below header
  color: '#003b1c', // Accent color for header
};

const footerStyle = {
  marginTop: 'auto', // Pushes footer to the bottom
  textAlign: 'center',
  padding: '15px 0',
  backgroundColor: '#f1f1f1',
  borderTop: '1px solid #ddd',
};

export default Account;
