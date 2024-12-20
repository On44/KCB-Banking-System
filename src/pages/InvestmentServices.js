import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvestmentServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Fixed Deposit Accounts",
      description: "Open and manage fixed-term investments with competitive interest rates. Choose your preferred term duration and start investing.",
    },
    {
      id: 2,
      title: "Stock/Mutual Funds",
      description: "Access trading platforms or invest in managed funds to diversify your portfolio and grow your wealth over time.",
    },
    {
      id: 3,
      title: "Insurance Services",
      description: "Apply for health, life, or property insurance to protect yourself and your loved ones from unexpected financial risks.",
    },
  ];

  const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#e9f5f1",
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
    serviceButton: {
      backgroundColor: "#004d26",
      color: "#fff",
      padding: "12px 24px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      margin: "10px 15px",
      fontSize: "18px",
      transition: "background-color 0.3s, transform 0.3s",
    },
    serviceButtonHover: {
      backgroundColor: "#004d26",
      transform: "scale(1.05)",
    },
  };

  const handleNavigate = (serviceId) => {
    if (serviceId === 1) {
      navigate("/fixedDepositAccounts"); // Redirect to FixedDepositAccounts page
    } else if (serviceId === 2) {
      navigate("/stockMutualFunds"); // Redirect to StockMutualFunds page
    } else if (serviceId === 3) {
      navigate("/insuranceServices"); // Redirect to InsuranceServices page
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Investment Services</h2>
      <div>
        {services.map((service) => (
          <button
            key={service.id}
            style={styles.serviceButton}
            onClick={() => handleNavigate(service.id)}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.serviceButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.serviceButton.backgroundColor)}
          >
            {service.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InvestmentServices;
