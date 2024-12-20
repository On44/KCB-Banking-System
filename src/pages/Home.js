import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ marginBottom: '30px' }}>Welcome to KCB Online Banking</h1>
        <nav>
          <ul style={navStyle}>
            <li>
              <Link to="/account" style={linkStyle}>Account</Link>
            </li>
            <li>
              <Link to="/transactionForm" style={linkStyle}>Transactions</Link>
            </li>
            <li>
              <Link to="/corporate" style={linkStyle}>Corporate</Link>
            </li>
            <li>
              <Link to="/investmentServices" style={linkStyle}>Investment Services</Link>
            </li>
          </ul>
        </nav>
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
};

const navStyle = {
  display: 'flex',         // Use Flexbox
  justifyContent: 'center', // Center horizontally
  alignItems: 'center',     // Center vertically
  listStyle: 'none',        // Remove list bullets
  padding: 0,               // Remove padding
  marginTop: '20px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#003b1c',
  fontSize: '18px',
  margin: '0 15px', // Add spacing between links
};

const footerStyle = {
  marginTop: 'auto', // Pushes footer to the bottom
  textAlign: 'center',
  padding: '15px 0',
  backgroundColor: '#f1f1f1',
  borderTop: '1px solid #ddd',
};

export default Home;
