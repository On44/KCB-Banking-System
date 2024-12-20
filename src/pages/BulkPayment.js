import React, { useState } from 'react';

// BulkPayment Component
const BulkPayment = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('');

  // Handler to add payment details
  const handleAddPayment = (name, amount) => {
    const newPayment = { name, amount };
    setPaymentData([...paymentData, newPayment]);
    setTotalAmount(totalAmount + amount);
  };

  // Handler to process bulk payment
  const processBulkPayment = () => {
    // Simulate API call for bulk payment processing
    setPaymentStatus('Processing...');
    
    // Simulated success response after "processing"
    setTimeout(() => {
      setPaymentStatus('Payment Successful!');
    }, 2000);
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
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

  const totalAmountStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const statusStyle = {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '16px',
    color: paymentStatus === 'Payment Successful!' ? 'green' : 'orange',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Bulk Payment Tool</h1>

      <div>
        <input 
          type="text" 
          placeholder="Name of Supplier/Contractor" 
          id="name" 
          style={inputStyle}
        />
        <input 
          type="number" 
          placeholder="Amount" 
          id="amount" 
          style={inputStyle}
        />
        <button 
          onClick={() => handleAddPayment(
            document.getElementById('name').value, 
            parseFloat(document.getElementById('amount').value)
          )}
          style={buttonStyle}
        >
          Add Payment
        </button>
      </div>

      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Payments List</h3>
      <ul style={listStyle}>
        {paymentData.map((payment, index) => (
          <li key={index} style={listItemStyle}>
            {payment.name}: ${payment.amount}
          </li>
        ))}
      </ul>

      <h3 style={totalAmountStyle}>Total Amount: ${totalAmount}</h3>

      <button 
        onClick={processBulkPayment} 
        style={buttonStyle}
      >
        {paymentStatus === 'Processing...' ? 'Processing...' : 'Process Bulk Payment'}
      </button>

      <p style={statusStyle}>{paymentStatus}</p>
    </div>
  );
};

export default BulkPayment;
