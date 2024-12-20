// LoanApplication.js
import React, { useState } from 'react';

const LoanApplication = () => {
  const [loanType, setLoanType] = useState('');
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [creditScore] = useState(750); // Example static score

  const calculateLoan = () => {
    const interestRate = 0.05; // Example interest rate
    const monthlyRate = interestRate / 12;
    const numberOfPayments = tenure * 12;
    const payment = (
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
    ).toFixed(2);
    setMonthlyPayment(payment);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Loan application submitted for ${loanType} loan of $${amount}.`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Loan Application</h1>

      {/* Loan Type Selection */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Loan Type:
          <select
            style={styles.select}
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
          >
            <option value="">Select Loan Type</option>
            <option value="Personal">Personal Loan</option>
            <option value="Business">Business Loan</option>
            <option value="Instant">Instant Loan</option>
          </select>
        </label>

        {/* Loan Amount */}
        <label style={styles.label}>
          Loan Amount:
          <input
            type="number"
            style={styles.input}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter loan amount"
          />
        </label>

        {/* Loan Tenure */}
        <label style={styles.label}>
          Loan Tenure (years):
          <input
            type="number"
            style={styles.input}
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Enter loan tenure"
          />
        </label>

        {/* Loan Calculator */}
        <button
          type="button"
          onClick={calculateLoan}
          style={styles.calculateButton}
        >
          Calculate Monthly Payment
        </button>

        {monthlyPayment && (
          <div style={styles.result}>
            Estimated Monthly Payment: <strong>${monthlyPayment}</strong>
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" style={styles.submitButton}>
          Apply Now
        </button>
      </form>

      {/* Credit Score Section */}
      <div style={styles.creditScoreSection}>
        <h2 style={styles.subHeader}>Credit Score</h2>
        <p style={styles.creditScore}>Your Credit Score: <strong>{creditScore}</strong></p>
        <p style={styles.creditInfo}>
          A higher credit score increases your chances of loan approval.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '#004d26',
  },
  header: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  calculateButton: {
    padding: '10px',
    backgroundColor: '#004d26',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#004d26',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#333',
  },
  creditScoreSection: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  subHeader: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  creditScore: {
    fontSize: '18px',
    color: '#004d26',
  },
  creditInfo: {
    fontSize: '14px',
    color: '#555',
  },
};

export default LoanApplication;
