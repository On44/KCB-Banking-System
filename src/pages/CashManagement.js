import React, { useState } from 'react';

// CashManagement Component
const CashManagement = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [cashFlow, setCashFlow] = useState(0);
  const [transactionType, setTransactionType] = useState('Income');
  const [statusMessage, setStatusMessage] = useState('');

  // Handler to add transaction
  const handleAddTransaction = () => {
    const newTransaction = { description, amount, transactionType };
    setTransactions([...transactions, newTransaction]);
    setCashFlow(cashFlow + (transactionType === 'Income' ? amount : -amount));
    setDescription('');
    setAmount(0);
    setStatusMessage('Transaction added successfully!');
  };

  // Inline Styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '700px',
    margin: 'auto',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    width: 'calc(100% - 22px)',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#004d26',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  };

  const listItemStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    fontSize: '16px',
  };

  const cashFlowStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
    textAlign: 'center',
    color: cashFlow >= 0 ? 'green' : 'red',
  };

  const statusStyle = {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '16px',
    color: '#004d26',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Cash Management</h1>

      <div>
        <input 
          type="text" 
          placeholder="Transaction Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          style={inputStyle}
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          style={inputStyle}
        />
        <select 
          value={transactionType} 
          onChange={(e) => setTransactionType(e.target.value)} 
          style={inputStyle}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <button onClick={handleAddTransaction} style={buttonStyle}>
          Add Transaction
        </button>
      </div>

      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Transaction List</h3>
      <ul style={listStyle}>
        {transactions.map((transaction, index) => (
          <li key={index} style={listItemStyle}>
            {transaction.description}: ${transaction.amount} ({transaction.transactionType})
          </li>
        ))}
      </ul>

      <h3 style={cashFlowStyle}>Cash Flow: ${cashFlow}</h3>

      <p style={statusStyle}>{statusMessage}</p>
    </div>
  );
};

export default CashManagement;
