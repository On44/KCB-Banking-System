import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [users, setUsers] = useState([]); 
  const [auditLogs, setAuditLogs] = useState([]); 
  const [reports, setReports] = useState([]); 
  const [selectedUser, setSelectedUser] = useState(null);
  const [role, setRole] = useState("");

  const sampleUsers = [
    { id: 1, name: "Jack Oluoch", role: "Admin" },
    { id: 2, name: "Harry Bright", role: "Teller" },
    { id: 3, name: "Jeff Basil", role: "Auditor" },
  ];

  const sampleAuditLogs = [
    { date: "2024-12-18", action: "User Jack Oluoch logged in." },
    { date: "2024-12-18", action: "Teller Harry Bright processed a transaction." },
    { date: "2024-12-17", action: "Auditor Jeff Basil viewed a report." },
  ];

  const sampleReports = [
    { reportId: "R001", type: "Financial", generatedOn: "2024-12-18", status: "Completed" },
    { reportId: "R002", type: "Operational", generatedOn: "2024-12-18", status: "In Progress" },
  ];

  useEffect(() => {
    setUsers(sampleUsers);
    setAuditLogs(sampleAuditLogs);
    setReports(sampleReports);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f4f8",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#333",
      marginBottom: "30px",
      textAlign: "center",
      letterSpacing: "0.5px",
    },
    section: {
      marginBottom: "30px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
      padding: "20px",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#005a36",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      margin: "10px auto",
      width: "200px",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#007a52",
    },
    select: {
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "100%",
      fontSize: "16px",
      transition: "border-color 0.3s ease",
    },
    selectFocus: {
      borderColor: "#005a36",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    tableHeader: {
      backgroundColor: "#005a36",
      color: "#fff",
      textAlign: "left",
      padding: "12px",
      fontSize: "16px",
      borderBottom: "2px solid #004c2b",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
    },
    tableCell: {
      padding: "12px",
      fontSize: "15px",
      color: "#555",
    },
    tableRowHover: {
      backgroundColor: "#f0f4f8",
    },
  };

  const handleRoleChange = () => {
    if (role && selectedUser) {
      alert(`Role of ${selectedUser.name} changed to ${role}`);
    }
  };

  const handleGenerateReport = (type) => {
    alert(`${type} Report Generated`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Admin Dashboard</h2>

      {/* User Role Management */}
      <div style={styles.section}>
        <h3>User Role Management</h3>
        <select
          style={styles.select}
          onChange={(e) => setRole(e.target.value)}
          onFocus={(e) => e.target.style.borderColor = styles.selectFocus.borderColor}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Teller">Teller</option>
          <option value="Auditor">Auditor</option>
        </select>

        <select
          style={styles.select}
          onChange={(e) => setSelectedUser(users.find(user => user.id === parseInt(e.target.value)))}
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button
          style={styles.button}
          onClick={handleRoleChange}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Change Role
        </button>
      </div>

      {/* Audit Logs */}
      <div style={styles.section}>
        <h3>Audit Logs</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Date</th>
              <th style={styles.tableHeader}>Action</th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>{log.date}</td>
                <td style={styles.tableCell}>{log.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Report Generation */}
      <div style={styles.section}>
        <h3>Report Generation</h3>
        <button
          style={styles.button}
          onClick={() => handleGenerateReport("Financial")}
        >
          Generate Financial Report
        </button>
        <button
          style={styles.button}
          onClick={() => handleGenerateReport("Operational")}
        >
          Generate Operational Report
        </button>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Report ID</th>
              <th style={styles.tableHeader}>Type</th>
              <th style={styles.tableHeader}>Generated On</th>
              <th style={styles.tableHeader}>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>{report.reportId}</td>
                <td style={styles.tableCell}>{report.type}</td>
                <td style={styles.tableCell}>{report.generatedOn}</td>
                <td style={styles.tableCell}>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
