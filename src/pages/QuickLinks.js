import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  // Inline styles for styling the page
  const quickLinksStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
  };

  const listItemStyle = {
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#004d26",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#003f1f",
  };

  return (
    <div style={quickLinksStyle}>
      <h2 style={titleStyle}>Quick Links</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <Link to="/transfer-money" style={{ textDecoration: 'none' }}>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            >
              Transfer Money
            </button>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/view-account-statements" style={{ textDecoration: 'none' }}>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            >
              View Account Statement
            </button>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/loan-application" style={{ textDecoration: 'none' }}>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            >
              Loan Application
            </button>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/request-new-card" style={{ textDecoration: 'none' }}>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            >
              Request New Card
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
