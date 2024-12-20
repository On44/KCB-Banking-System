import React, { useState } from "react";

const Transaction = () => {
  const [transactionType, setTransactionType] = useState("fundTransfer");
  const [transactions] = useState([]); // Placeholder for transaction data

  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f7f9",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "0 auto",
    },
    header: {
      fontSize: "26px",
      fontWeight: "bold",
      color: "#004d26",
      marginBottom: "20px",
      textAlign: "center",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#004d26",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "18px",
      marginBottom: "20px",
      display: "block",
      width: "220px",
      margin: "15px auto",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#006f38",
    },
    section: {
      marginBottom: "30px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "25px",
    },
    input: {
      padding: "12px",
      margin: "12px 0",
      border: "1px solid #ccc",
      borderRadius: "6px",
      width: "100%",
      fontSize: "16px",
    },
    inputLarge: {
      height: "45px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    tableHeader: {
      backgroundColor: "#004d26",
      color: "#fff",
      textAlign: "left",
      padding: "15px",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
    },
    tableCell: {
      padding: "12px",
      fontSize: "16px",
      textAlign: "center",
    },
    tableCellDate: {
      fontSize: "16px",
      color: "#666",
    },
  };

  const handleFundTransfer = (e) => {
    e.preventDefault();
    alert("Fund Transfer Successful!");
  };

  const handleRecurringPayment = (e) => {
    e.preventDefault();
    alert("Recurring Payment Scheduled!");
  };

  const handleMPesa = (e) => {
    e.preventDefault();
    alert("MPesa Transaction Successful!");
  };

  const handleFilterTransactions = (e) => {
    e.preventDefault();
    alert("Filtering transactions...");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Transactions</h2>

      {/* Fund Transfers Section */}
      {transactionType === "fundTransfer" && (
        <div style={styles.section}>
          <h3>Fund Transfer</h3>
          <form onSubmit={handleFundTransfer}>
            <input
              style={{ ...styles.input, ...styles.inputLarge }}
              type="text"
              placeholder="From Account"
              required
            />
            <input
              style={{ ...styles.input, ...styles.inputLarge }}
              type="text"
              placeholder="To Account"
              required
            />
            <input
              style={styles.input}
              type="number"
              placeholder="Amount"
              required
            />
            <button
              style={styles.button}
              type="submit"
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
              Transfer Funds
            </button>
          </form>
        </div>
      )}

      {/* Transaction History Section */}
      {transactionType === "transactionHistory" && (
        <div style={styles.section}>
          <h3>Transaction History</h3>
          <form onSubmit={handleFilterTransactions}>
            <input
              style={styles.input}
              type="text"
              placeholder="Filter by Transaction ID or Date"
            />
            <button
              style={styles.button}
              type="submit"
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
              Filter Transactions
            </button>
          </form>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Transaction ID</th>
                <th style={styles.tableHeader}>Amount</th>
                <th style={styles.tableHeader}>Date</th>
                <th style={styles.tableHeader}>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} style={styles.tableRow}>
                  <td style={styles.tableCell}>{transaction.id}</td>
                  <td style={styles.tableCell}>{transaction.amount}</td>
                  <td style={styles.tableCellDate}>{transaction.date}</td>
                  <td style={styles.tableCell}>{transaction.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Recurring Payments Section */}
      {transactionType === "recurringPayments" && (
        <div style={styles.section}>
          <h3>Recurring Payments</h3>
          <form onSubmit={handleRecurringPayment}>
            <input
              style={styles.input}
              type="text"
              placeholder="Recipient Account"
              required
            />
            <input
              style={styles.input}
              type="number"
              placeholder="Amount"
              required
            />
            <input
              style={styles.input}
              type="number"
              placeholder="Frequency (in days)"
              required
            />
            <button
              style={styles.button}
              type="submit"
              onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
            >
              Schedule Payment
            </button>
          </form>
        </div>
      )}

      {/* MPesa Integration Section */}
      {transactionType === "mpesaIntegration" && (
        <div style={styles.section}>
          <h3>MPesa Integration</h3>
          <button
            style={styles.button}
            onClick={handleMPesa}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Perform MPesa Transaction
          </button>
        </div>
      )}

      {/* Navigation Buttons */}
      <button
        style={styles.button}
        onClick={() => setTransactionType("fundTransfer")}
      >
        Fund Transfer
      </button>
      <button
        style={styles.button}
        onClick={() => setTransactionType("transactionHistory")}
      >
        Transaction History
      </button>
      <button
        style={styles.button}
        onClick={() => setTransactionType("recurringPayments")}
      >
        Recurring Payments
      </button>
      <button
        style={styles.button}
        onClick={() => setTransactionType("mpesaIntegration")}
      >
        MPesa Integration
      </button>
    </div>
  );
};

export default Transaction;
