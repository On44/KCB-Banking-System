import React from "react";
import PayrollServices from "./PayrollServices"; // Adjust path if needed
import BulkPayment from "./BulkPayment"; // Adjust path if needed
import CashManagement from "./CashManagement"; // Adjust path if needed

const Corporate = () => {
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
    },
    section: {
      marginBottom: "30px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      padding: "20px",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#004d26", // KCB brand color
      marginBottom: "10px",
      textAlign: "center",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#333",
    },
    button: {
      display: "block",
      margin: "20px auto",
      padding: "10px 20px",
      backgroundColor: "#004d26",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h2 style={styles.header}>Payroll Services</h2>
        <PayrollServices /> {/* Import the PayrollServices component here */}
      </div>

      <div style={styles.section}>
        <h2 style={styles.header}>Bulk Payments</h2>
        <BulkPayment /> {/* Import the BulkPayments component here */}
      </div>

      <div style={styles.section}>
        <h2 style={styles.header}>Cash Management</h2>
        <CashManagement /> {/* Import the CashManagement component here */}
      </div>
    </div>
  );
};

export default Corporate;
