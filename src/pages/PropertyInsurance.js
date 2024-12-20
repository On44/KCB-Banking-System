import React from 'react';

const PropertyInsurance = () => {
  const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#e3f2fd",
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
      <h2 style={styles.header}>Property Insurance</h2>
      <div style={styles.content}>
        <p>Protect your property with our comprehensive property insurance plans. Whether it's your home, office, or rental property, we offer policies that cover damages caused by natural disasters, fire, theft, and more.</p>
        <p>Our property insurance ensures that you get the best protection at competitive rates, so you can have peace of mind knowing your property is covered.</p>
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

export default PropertyInsurance;
