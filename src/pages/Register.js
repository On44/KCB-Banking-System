import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      setSuccessMessage(res.data.message);
      setErrorMessage('');
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setSuccessMessage('');
    }
  };

  // Inline Styles
  const styles = {
    formContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f7fc',
      fontFamily: 'Arial, sans-serif',
    },
    formWrapper: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#333',
    },
    formGroup: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#004d26',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#004d26',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#004d26',
    },
    message: {
      marginBottom: '15px',
      padding: '10px',
      borderRadius: '4px',
    },
    errorMessage: {
      backgroundColor: '#ffdddd',
      color: '#d8000c',
      border: '1px solid #d8000c',
    },
    successMessage: {
      backgroundColor: '#ddffdd',
      color: '#4CAF50',
      border: '1px solid #004d26',
    },
  };

  return (
    <div style={styles.formContainer}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Register</h2>

        {errorMessage && <div style={{ ...styles.message, ...styles.errorMessage }}>{errorMessage}</div>}
        {successMessage && <div style={{ ...styles.message, ...styles.successMessage }}>{successMessage}</div>}

        <form onSubmit={handleRegister}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
