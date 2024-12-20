import React, { useState } from 'react';

const OpenAccount = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    investmentType: '',
    amount: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log('Form Data:', formData);
  };

  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: 'auto',
    },
    header: {
      fontSize: '28px',
      fontWeight: '600',
      color: '#004d26',
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '8px',
      fontWeight: '500',
      color: '#34495e',
    },
    input: {
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    select: {
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    button: {
      padding: '12px',
      backgroundColor: '#004d26',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: '500',
      textTransform: 'uppercase',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#004d26',
    },
    successMessage: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#dff0d8',
      color: '#3c763d',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Open Your Investment Account</h2>
      {formSubmitted ? (
        <div style={styles.successMessage}>
          Thank you for opening an account with us! We will get in touch with you shortly.
        </div>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="fullName">
            Full Name
          </label>
          <input
            style={styles.input}
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />

          <label style={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            required
          />

          <label style={styles.label} htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            style={styles.input}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            required
          />

          <label style={styles.label} htmlFor="investmentType">
            Investment Type
          </label>
          <select
            style={styles.select}
            id="investmentType"
            name="investmentType"
            value={formData.investmentType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Stocks">Stocks</option>
            <option value="Mutual Funds">Mutual Funds</option>
          </select>

          <label style={styles.label} htmlFor="amount">
            Investment Amount (USD)
          </label>
          <input
            style={styles.input}
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="Enter investment amount"
            required
          />

          <button
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default OpenAccount;
