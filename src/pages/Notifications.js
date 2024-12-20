import React from "react";

const Notifications = () => {
  const notifications = [
    { message: "Your loan application has been approved." },
    { message: "Your account balance has dropped below Ksh 1,000." },
  ];

  // Inline styles
  const notificationsStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
  };

  const listItemStyle = {
    padding: "10px 15px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={notificationsStyle}>
      <h2 style={titleStyle}>Notifications</h2>
      <ul style={listStyle}>
        {notifications.map((notification, index) => (
          <li key={index} style={listItemStyle}>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
