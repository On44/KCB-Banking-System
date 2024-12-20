import React from 'react';

const LifeInsurance = () => {
  const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#f3e5f5",
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
      <h2 style={styles.header}>Life Insurance</h2>
      <div style={styles.content}>
        <p>Secure the future of your loved ones with our life insurance policies. We offer comprehensive plans that provide financial protection in case of the unexpected.</p>
        <p>Choose from a range of term life, whole life, and universal life insurance options to ensure peace of mind for you and your family.</p>
      </div>
      <button
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Get Quote
      </button>
    </div>
  );
};

export default LifeInsurance;
