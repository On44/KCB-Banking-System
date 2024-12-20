// src/components/AccountSummary.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const AccountSummary = () => {
  const [accountData, setAccountData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get("http://localhost:5000/api/account-summary")  // Your API endpoint
      .then((response) => {
        setAccountData(response.data);  // Assume your backend sends data as response
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Add a check to ensure accountData is not null before rendering
  if (!accountData) {
    return <div>No account data available</div>;
  }

  return (
    <div className="account-summary">
      <h2>Account Summary</h2>
      <div className="account-details">
        <p><strong>Account Number:</strong> {accountData.accountNumber}</p>
        <p><strong>Balance:</strong> Ksh {accountData.balance}</p>
        <p><strong>Transactions:</strong> {accountData.transactions}</p>
      </div>
    </div>
  );
};

export default AccountSummary;
