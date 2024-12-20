import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Payroll = () => {
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "20px auto",
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
      marginBottom: "20px",
      textAlign: "justify",
    },
    benefitsList: {
      listStyle: "none",
      padding: "0",
      marginBottom: "20px",
    },
    benefitItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    benefitIcon: {
      marginRight: "10px",
      fontSize: "20px",
      color: "#004d26",
    },
    button: {
      display: "block",
      padding: "10px 20px",
      backgroundColor: "#004d26", // KCB brand color
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      textAlign: "center",
      margin: "0 auto",
      textDecoration: "none", // Remove underline for button links
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Payroll Services</h2>
      <p style={styles.paragraph}>
        Our payroll services are designed to help businesses streamline the
        process of salary disbursements. With secure and accurate payment
        methods, you can ensure your employees receive their salaries on time,
        every time.
      </p>

      <ul style={styles.benefitsList}>
        <li style={styles.benefitItem}>
          <span style={styles.benefitIcon}>✔️</span>
          Automated salary disbursements to employee accounts.
        </li>
        <li style={styles.benefitItem}>
          <span style={styles.benefitIcon}>✔️</span>
          Easy integration with your existing financial systems.
        </li>
        <li style={styles.benefitItem}>
          <span style={styles.benefitIcon}>✔️</span>
          Detailed payroll reporting for compliance and audits.
        </li>
        <li style={styles.benefitItem}>
          <span style={styles.benefitIcon}>✔️</span>
          Reliable and secure transaction processes.
        </li>
      </ul>

      {/* Link to Contact page using React Router */}
      <Link to="/contact" style={styles.button}>Contact Us for Payroll Services</Link>
    </div>
  );
};

export default Payroll;
