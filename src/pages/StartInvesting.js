import React from 'react';

const StartInvesting = () => {
  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#f9fafb',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '900px',
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      fontSize: '32px',
      fontWeight: '600',
      color: '#2c3e50',
      textAlign: 'center',
      marginBottom: '20px',
      textTransform: 'uppercase',
    },
    section: {
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: '500',
      color: '#34495e',
      marginBottom: '10px',
    },
    sectionText: {
      fontSize: '16px',
      color: '#7f8c8d',
      lineHeight: '1.6',
    },
    stepsList: {
      paddingLeft: '20px',
      margin: '10px 0',
    },
    stepItem: {
      marginBottom: '10px',
      fontSize: '16px',
      color: '#34495e',
    },
    callToAction: {
      textAlign: 'center',
      marginTop: '30px',
    },
    actionButton: {
      display: 'inline-block',
      padding: '12px 24px',
      backgroundColor: '#004d26',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    actionButtonHover: {
      backgroundColor: '#004d26',
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Start Investing Today</h2>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Why Invest With Us?</div>
        <div style={styles.sectionText}>
          We provide tailored investment opportunities to help you achieve your financial goals. Whether you're new to investing or an experienced investor, we offer:
        </div>
        <ul style={styles.stepsList}>
          <li style={styles.stepItem}>Expert advice and personalized strategies.</li>
          <li style={styles.stepItem}>Access to a wide range of investment options.</li>
          <li style={styles.stepItem}>Comprehensive market insights and analytics.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>How to Get Started?</div>
        <div style={styles.sectionText}>Follow these simple steps:</div>
        <ul style={styles.stepsList}>
          <li style={styles.stepItem}>1. Create an account with us.</li>
          <li style={styles.stepItem}>2. Choose your preferred investment options.</li>
          <li style={styles.stepItem}>3. Set your financial goals and start investing.</li>
        </ul>
      </div>

      <div style={styles.callToAction}>
        <a
          href="/openAccount"
          style={styles.actionButton}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.actionButtonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.actionButton.backgroundColor)}
        >
          Open Your Account
        </a>
      </div>
    </div>
  );
};

export default StartInvesting;
