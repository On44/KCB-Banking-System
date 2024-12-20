import React, { useState } from 'react';

const OpenFixedDeposit = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    depositAmount: "",
    term: "1 year",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const styles = {
    container: {
      padding: "40px",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      maxWidth: "600px",
      margin: "40px auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      fontSize: "28px",
      fontWeight: "600",
      color: "#2c3e50",
      textAlign: "center",
      marginBottom: "20px",
      textTransform: "uppercase",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      fontSize: "16px",
      fontWeight: "500",
      color: "#34495e",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
    },
    select: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "16px",
    },
    submitButton: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#27ae60",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "18px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.3s",
      textAlign: "center",
    },
    submitButtonHover: {
      backgroundColor: "#2ecc71",
    },
    successMessage: {
      fontSize: "18px",
      color: "#2ecc71",
      textAlign: "center",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Open Fixed Deposit Account</h1>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              style={styles.input}
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={styles.input}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              style={styles.input}
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="depositAmount">
              Deposit Amount
            </label>
            <input
              type="number"
              id="depositAmount"
              name="depositAmount"
              style={styles.input}
              value={formData.depositAmount}
              onChange={handleInputChange}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="term">
              Term Duration
            </label>
            <select
              id="term"
              name="term"
              style={styles.select}
              value={formData.term}
              onChange={handleInputChange}
            >
              <option value="1 year">1 Year</option>
              <option value="2 years">2 Years</option>
              <option value="3 years">3 Years</option>
              <option value="5 years">5 Years</option>
            </select>
          </div>

          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.submitButton.backgroundColor)}
          >
            Submit
          </button>
        </form>
      ) : (
        <div style={styles.successMessage}>
          Thank you for opening a Fixed Deposit Account! We will contact you shortly.
        </div>
      )}
    </div>
  );
};

export default OpenFixedDeposit;
