import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAccountStatements = () => {
  const [statements, setStatements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatements = async () => {
      try {
        const response = await axios.get('/api/account-statements');
        setStatements(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching account statements', error);
      }
    };

    fetchStatements();
  }, []);

  const styles = {
    page: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
    },
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '20px auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#004d26',
      color: '#ffffff',
      padding: '12px',
      textAlign: 'left',
      fontSize: '14px',
      letterSpacing: '0.5px',
    },
    td: {
      padding: '10px',
      border: '1px solid #ddd',
      fontSize: '14px',
      color: '#333',
    },
    trHover: {
      transition: 'background-color 0.2s ease-in-out',
    },
    footer: {
      backgroundColor: '#004d26',
      color: '#ffffff',
      textAlign: 'center',
      padding: '15px 0',
      marginTop: 'auto',
      fontSize: '14px',
    },
    loading: {
      textAlign: 'center',
      color: '#555',
      fontSize: '16px',
      padding: '20px',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '20px' }}>
          Account Statements
        </h2>
        {loading ? (
          <p style={styles.loading}>Loading statements...</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {statements.map((statement) => (
                <tr
                  key={statement.id}
                  style={{
                    ...styles.trHover,
                    ':hover': { backgroundColor: '#f4f4f4' },
                  }}
                >
                  <td style={styles.td}>{statement.date}</td>
                  <td style={styles.td}>{statement.description}</td>
                  <td style={styles.td}>{statement.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <footer style={styles.footer}>
      </footer>
    </div>
  );
};

export default ViewAccountStatements;
