import React, { useState, useEffect } from "react";
import axios from "axios";

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("authToken"); // Example: Retrieving token from local storage

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/recent-transactions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Inline styles
  const containerStyle = {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "20px auto",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  };

  const listStyle = {
    listStyleType: "none",
    paddingLeft: "0",
  };

  const listItemStyle = {
    backgroundColor: "#f9f9f9",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  };

  const transactionTextStyle = {
    fontSize: "16px",
    color: "#555",
  };

  const boldTextStyle = {
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Recent Transactions</h2>
      <ul style={listStyle}>
        {transactions.map((transaction, index) => (
          <li key={index} style={listItemStyle}>
            <p style={transactionTextStyle}><span style={boldTextStyle}>Date:</span> {transaction.date}</p>
            <p style={transactionTextStyle}><span style={boldTextStyle}>Type:</span> {transaction.type}</p>
            <p style={transactionTextStyle}><span style={boldTextStyle}>Amount:</span> Ksh {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
