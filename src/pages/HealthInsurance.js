import React from 'react';

const HealthInsurance = () => {
  const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#f1f8e9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      maxWidth: "900px",
      margin: "auto",
    },
    header: {
      fontSize: "32px",
      fontWeight: "600",
      color: "#2c3e50",
      textAlign: "center",
      marginBottom: "20px",
      textTransform: "uppercase",
    },
    content: {
      fontSize: "18px",
      color: "#34495e",
      lineHeight: "1.6",
    },
    button: {
      backgroundColor: "#27ae60",
      color: "#fff",
      padding: "12px 24px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "18px",
      transition: "background-color 0.3s, transform 0.3s",
      marginTop: "20px",
    },
    buttonHover: {
      backgroundColor: "#2ecc71",
      transform: "scale(1.05)",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Health Insurance</h2>
      <div style={styles.content}>
        <p>Our health insurance plans cover a wide range of medical services, ensuring that you and your family receive the best care when needed.</p>
        <p>We offer affordable premiums, access to top hospitals, and comprehensive coverage for both inpatient and outpatient services.</p>
      </div>
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Apply Now
      </button>
    </div>
  );
};

export default HealthInsurance;
