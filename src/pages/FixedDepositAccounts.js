import React from 'react';

const FixedDepositAccounts = () => {
  const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#f7fbfc",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "40px auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      fontSize: "32px",
      fontWeight: "600",
      color: "#004d26",
      textAlign: "center",
      marginBottom: "20px",
      textTransform: "uppercase",
    },
    section: {
      marginBottom: "20px",
    },
    subHeader: {
      fontSize: "24px",
      fontWeight: "500",
      color: "#004d26",
      marginBottom: "10px",
    },
    text: {
      fontSize: "16px",
      color: "#7f8c8d",
      lineHeight: "1.8",
      marginBottom: "10px",
    },
    link: {
      color: "#27ae60",
      textDecoration: "none",
      fontWeight: "500",
    },
    list: {
      paddingLeft: "20px",
      margin: "10px 0",
    },
    listItem: {
      fontSize: "16px",
      color: "#7f8c8d",
      lineHeight: "1.8",
    },
    actionButton: {
      display: "block",
      width: "100%",
      padding: "12px",
      backgroundColor: "#004d26",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "18px",
      fontWeight: "500",
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      marginTop: "20px",
      transition: "background-color 0.3s",
    },
    actionButtonHover: {
      backgroundColor: "#004d26",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Fixed Deposit Accounts</h1>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>What are Fixed Deposit Accounts?</h2>
        <p style={styles.text}>
          Fixed Deposit Accounts allow you to lock in your funds for a specific period at a competitive interest rate. 
          These accounts are ideal for individuals seeking a secure and guaranteed return on their investment.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Features</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Competitive interest rates tailored to your investment duration.</li>
          <li style={styles.listItem}>Flexible term durations ranging from 1 month to 5 years.</li>
          <li style={styles.listItem}>Guaranteed returns at the end of the term period.</li>
          <li style={styles.listItem}>Automatic renewal options available for convenience.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>Benefits</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Secure your funds with minimal risk.</li>
          <li style={styles.listItem}>Plan your finances with fixed returns.</li>
          <li style={styles.listItem}>Diversify your investment portfolio.</li>
          <li style={styles.listItem}>Special rates for long-term deposits.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeader}>How to Open a Fixed Deposit Account?</h2>
        <p style={styles.text}>
          Opening a Fixed Deposit Account is easy. You can{" "}
          <a href="/open-fixed-deposit" style={styles.link}>
            open your account online
          </a>{" "}
          or visit our nearest branch for assistance. Our team is here to guide you every step of the way.
        </p>
      </div>

      <a
        href="/openFixedDeposit"
        style={styles.actionButton}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.actionButtonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.actionButton.backgroundColor)}
      >
        Open an Account Now
      </a>
    </div>
  );
};

export default FixedDepositAccounts;
