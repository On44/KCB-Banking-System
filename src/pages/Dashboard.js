import React from "react";
import AccountSummary from "./AccountSummary";
import RecentTransactions from "./RecentTransactions";
import AccountDetails from "./AccountDetails";
import Notifications from "./Notifications";
import QuickLinks from "./QuickLinks";

const Dashboard = () => {
  // Inline styles for the dashboard
  const dashboardContainerStyle = {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "30px",
  };

  const dashboardGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  };

  const dashboardItemStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={dashboardContainerStyle}>
      <h1 style={headingStyle}>KCB Banking App</h1>
      
      <div style={dashboardGridStyle}>
        {/* Account Summary */}
        <div style={dashboardItemStyle}>
          <AccountSummary />
        </div>

        {/* Quick Links */}
        <div style={dashboardItemStyle}>
          <QuickLinks />
        </div>
        
        {/* Recent Transactions */}
        <div style={dashboardItemStyle}>
          <RecentTransactions />
        </div>

        {/* Account Details */}
        <div style={dashboardItemStyle}>
          <AccountDetails />
        </div>

        {/* Notifications */}
        <div style={dashboardItemStyle}>
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
