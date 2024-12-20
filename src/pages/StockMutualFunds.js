import React from 'react';

const StockMutualFunds = () => {
  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#f7fbfc',
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
    list: {
      paddingLeft: '20px',
      margin: '10px 0',
    },
    listItem: {
      marginBottom: '10px',
      fontSize: '16px',
      color: '#34495e',
    },
    linkButton: {
      display: 'inline-block',
      padding: '12px 24px',
      backgroundColor: '#004d26',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      textAlign: 'center',
      marginTop: '20px',
      transition: 'background-color 0.3s, transform 0.3s',
      cursor: 'pointer',
    },
    linkButtonHover: {
      backgroundColor: '#004d26',
      transform: 'scale(1.05)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Stock and Mutual Funds</h2>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Invest in Stocks</div>
        <div style={styles.sectionText}>
          Stocks represent ownership in a company and are a great way to grow your wealth over time. Here’s what you can do:
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>Access real-time stock trading platforms.</li>
          <li style={styles.listItem}>Monitor market trends and performance.</li>
          <li style={styles.listItem}>Diversify your investments across industries.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Invest in Mutual Funds</div>
        <div style={styles.sectionText}>
          Mutual funds pool money from multiple investors to invest in a diversified portfolio. Benefits include:
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>Professional fund management by experts.</li>
          <li style={styles.listItem}>Lower risk through diversification.</li>
          <li style={styles.listItem}>Accessible investment options for all budgets.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Why Choose Us?</div>
        <div style={styles.sectionText}>
          We provide access to top-tier trading platforms and reliable mutual fund options to help you achieve your financial goals. Our services include:
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>Guided investment strategies.</li>
          <li style={styles.listItem}>Comprehensive market insights.</li>
          <li style={styles.listItem}>24/7 support for all your queries.</li>
        </ul>
      </div>

      <a
        href="/startInvesting"
        style={styles.linkButton}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.linkButtonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.linkButton.backgroundColor)}
      >
        Start Investing Now
      </a>
    </div>
  );
};

export default StockMutualFunds;
