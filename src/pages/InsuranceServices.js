import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InsuranceServices = () => {
  const [selectedService] = useState(null);
  const navigate = useNavigate();

  const insuranceOptions = [
    {
      id: 1,
      title: "Health Insurance",
      description: "Secure your health and well-being with comprehensive health insurance plans. Cover medical emergencies, consultations, and treatments.",
    },
    {
      id: 2,
      title: "Life Insurance",
      description: "Ensure financial security for your loved ones with customizable life insurance policies tailored to your needs.",
    },
    {
      id: 3,
      title: "Property Insurance",
      description: "Protect your home and valuable assets against unexpected damages or losses with reliable property insurance.",
    },
  ];

  const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      maxWidth: "900px",
      margin: "auto",
      textAlign: "center",
    },
    header: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#004d26",
      color: "#fff",
      padding: "12px 24px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      margin: "10px",
      fontSize: "18px",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#004d26",
    },
    description: {
      marginTop: "25px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
    },
    title: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#34495e",
      marginBottom: "10px",
    },
    desc: {
      fontSize: "16px",
      color: "#7f8c8d",
      lineHeight: "1.6",
    },
  };

  const handleNavigate = (serviceId) => {
    if (serviceId === 1) {
      navigate("/healthInsurance"); // Redirect to HealthInsurance page
    } else if (serviceId === 2) {
      navigate("/lifeInsurance"); // Redirect to LifeInsurance page
    } else if (serviceId === 3) {
      navigate("/propertyInsurance"); // Redirect to PropertyInsurance page
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Insurance Services</h1>
      <div>
        {insuranceOptions.map((service) => (
          <button
            key={service.id}
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            onClick={() => handleNavigate(service.id)} // Navigate on click
          >
            {service.title}
          </button>
        ))}
      </div>
      {selectedService && (
        <div style={styles.description}>
          <h2 style={styles.title}>{selectedService.title}</h2>
          <p style={styles.desc}>{selectedService.description}</p>
        </div>
      )}
    </div>
  );
};

export default InsuranceServices;
