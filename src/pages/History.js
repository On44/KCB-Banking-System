import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Pagination settings
const ITEMS_PER_PAGE = 10;

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    transactionType: 'all', // 'deposit', 'withdraw', 'all'
  });

  // Fetch transaction history
  useEffect(() => {
    const fetchTransactionHistory = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/history', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTransactions(response.data);
        setFilteredTransactions(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Failed to fetch transaction history');
      }
    };

    fetchTransactionHistory();
  }, []);

  // Filter transactions based on date and type
  const handleFilterChange = () => {
    let filtered = [...transactions];

    // Filter by transaction type
    if (filters.transactionType !== 'all') {
      filtered = filtered.filter(transaction => transaction.type === filters.transactionType);
    }

    // Filter by date range
    if (filters.startDate) {
      filtered = filtered.filter(transaction => new Date(transaction.date) >= new Date(filters.startDate));
    }
    if (filters.endDate) {
      filtered = filtered.filter(transaction => new Date(transaction.date) <= new Date(filters.endDate));
    }

    setFilteredTransactions(filtered);
    setCurrentPage(1); // Reset to first page
  };

  // Paginate transactions
  const currentTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Sort transactions by date or amount
  const handleSort = (key) => {
    // eslint-disable-next-line array-callback-return
    const sorted = [...filteredTransactions].sort((a, b) => {
      if (key === 'date') {
        return new Date(b.date) - new Date(a.date); // Sort by latest date first
      } else if (key === 'amount') {
        return b.amount - a.amount; // Sort by highest amount first
      }
    });
    setFilteredTransactions(sorted);
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headerStyle}>Transaction History</h1>

        {/* Filters */}
        <div style={filterContainerStyle}>
          <input
            type="date"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
            style={inputStyle}
          />
          <input
            type="date"
            value={filters.endDate}
            onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
            style={inputStyle}
          />
          <select
            value={filters.transactionType}
            onChange={(e) => setFilters({ ...filters, transactionType: e.target.value })}
            style={inputStyle}
          >
            <option value="all">All Types</option>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
          <button onClick={handleFilterChange} style={buttonStyle}>Apply Filters</button>
        </div>

        {/* Table of transactions */}
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && filteredTransactions.length === 0 && <p>No transactions found.</p>}

        {!loading && !error && filteredTransactions.length > 0 && (
          <div>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle} onClick={() => handleSort('date')}>Date</th>
                  <th style={thStyle} onClick={() => handleSort('amount')}>Amount</th>
                  <th style={thStyle}>Type</th>
                  <th style={thStyle}>Recipient</th>
                </tr>
              </thead>
              <tbody>
                {currentTransactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{new Date(transaction.date).toLocaleDateString()}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</td>
                    <td>{transaction.recipientAccount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div style={paginationStyle}>
              {Array.from({ length: Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  style={pageButtonStyle}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <footer style={footerStyle}>
      </footer>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  paddingBottom: '40px',
};

const contentStyle = {
  textAlign: 'center',
  padding: '20px',
  flexGrow: 1,
};

const headerStyle = {
  marginBottom: '30px',
  color: '#003b1c',
};

const filterContainerStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  margin: '0 10px',
  padding: '10px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '14px',
  backgroundColor: '#003b1c',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
};

const thStyle = {
  padding: '10px',
  backgroundColor: '#003b1c',
  color: 'white',
  cursor: 'pointer',
};

const paginationStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const pageButtonStyle = {
  padding: '5px 10px',
  margin: '0 5px',
  border: '1px solid #ccc',
  cursor: 'pointer',
};

const footerStyle = {
  marginTop: 'auto',
  textAlign: 'center',
  padding: '15px 0',
  backgroundColor: '#f1f1f1',
  borderTop: '1px solid #ddd',
};

export default History;
