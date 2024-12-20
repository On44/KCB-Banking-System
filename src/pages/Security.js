import React, { useState, useEffect } from 'react';

const SecurityPage = () => {
  const [sessions, setSessions] = useState([]); // To store login activity data
  const [fraudAlerts, setFraudAlerts] = useState([]); // To store fraud alerts
  const [secureMessages, setSecureMessages] = useState(""); // To store secure message input
  // eslint-disable-next-line no-empty-pattern
  const [] = useState(null); // Store active session to be managed

  // Simulated data for login activity and fraud alerts
  const sampleSessions = [
    { id: 1, device: "Laptop", location: "New York, USA", lastLogin: "2024-12-18 10:30 AM" },
    { id: 2, device: "Mobile", location: "London, UK", lastLogin: "2024-12-18 11:00 AM" },
  ];

  const sampleFraudAlerts = [
    { id: 1, alert: "Unusual login attempt from a new device", date: "2024-12-18" },
    { id: 2, alert: "Password change request from an unknown IP", date: "2024-12-17" },
  ];

  useEffect(() => {
    // Here you would normally fetch real data from an API
    setSessions(sampleSessions);
    setFraudAlerts(sampleFraudAlerts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to handle message submission
  const handleSecureMessageSubmit = () => {
    // In a real app, you would send the message to a backend here
    alert(`Secure message sent to bank staff: \n${secureMessages}`);
    setSecureMessages(""); // Clear the message input after sending
  };

  // Function to manage active sessions (e.g., logout from a session)
  const manageActiveSessions = (sessionId) => {
    // Simulate removing the session
    const updatedSessions = sessions.filter(session => session.id !== sessionId);
    setSessions(updatedSessions);
    alert(`Session ${sessionId} has been terminated.`);
  };

  // Styling for the page
  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#f4f4f9",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    section: {
      marginBottom: "30px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "15px",
    },
    tableHeader: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "10px",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
    },
    tableCell: {
      padding: "10px",
      textAlign: "left",
    },
    button: {
      backgroundColor: "#004d26",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "10px",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Security Settings</h2>

      {/* Login Activity Section */}
      <div style={styles.section}>
        <h3 style={styles.header}>Login Activity</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Device</th>
              <th style={styles.tableHeader}>Location</th>
              <th style={styles.tableHeader}>Last Login</th>
              <th style={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{session.device}</td>
                <td style={styles.tableCell}>{session.location}</td>
                <td style={styles.tableCell}>{session.lastLogin}</td>
                <td style={styles.tableCell}>
                  <button 
                    style={styles.button} 
                    onClick={() => manageActiveSessions(session.id)}>
                    Terminate Session
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button style={styles.button}>Manage Active Sessions</button>
      </div>

      {/* Fraud Alerts Section */}
      <div style={styles.section}>
        <h3 style={styles.header}>Fraud Alerts</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Alert</th>
              <th style={styles.tableHeader}>Date</th>
            </tr>
          </thead>
          <tbody>
            {fraudAlerts.map((alert) => (
              <tr key={alert.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{alert.alert}</td>
                <td style={styles.tableCell}>{alert.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Secure Messaging Section */}
      <div style={styles.section}>
        <h3 style={styles.header}>Secure Messaging</h3>
        <textarea
          style={styles.input}
          rows="4"
          placeholder="Send a secure message to bank staff..."
          value={secureMessages}
          onChange={(e) => setSecureMessages(e.target.value)}
        />
        <button style={styles.button} onClick={handleSecureMessageSubmit}>
          Send Secure Message
        </button>
      </div>
    </div>
  );
};

export default SecurityPage;
