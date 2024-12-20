import React, { useState, useEffect } from "react";
import axios from "axios";

const AccountDetails = () => {
  const [accountData, setAccountData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get("http://localhost:5000/api/account-details")  // Your API endpoint
      .then((response) => {
        setAccountData(response.data);  // Assume your backend sends data as response
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load account details.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={accountDetailsStyle}>
      <h2 style={headingStyle}>Account Details</h2>
      <p style={paragraphStyle}>
        <strong style={strongStyle}>Account Type:</strong> {accountData.accountType}
      </p>
      <p style={paragraphStyle}>
        <strong style={strongStyle}>Last Login:</strong> {accountData.lastLogin}
      </p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Update Account Info
      </button>
    </div>
  );
};

const accountDetailsStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "500px",
  margin: "0 auto",
};

const headingStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
};

const paragraphStyle = {
  fontSize: "1rem",
  marginBottom: "10px",
};

const strongStyle = {
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
  display: "block",
  width: "100%",
  marginTop: "20px",
};

const buttonHoverStyle = {
  backgroundColor: "#0056b3",
};

export default AccountDetails;
