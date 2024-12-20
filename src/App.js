import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";
import History from "./pages/History";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy"; // Import Privacy page
import Terms from "./pages/Terms"; // Import Terms page
import Support from "./pages/Support";
import TransactionForm from "./pages/TransactionsForm";
import Dashboard from "./pages/Dashboard";
import TransferMoney from "./pages/TransferMoney";
import ViewAccountStatements from "./pages/ViewAccountStatements";
import LoanApplication from "./pages/LoanApplication";
import RequestNewCard from "./pages/RequestNewCard";
import QuickLinks from "./pages/QuickLinks";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import AdminPage from "./pages/AdminPage"; // Ensure the AdminPage import is here
import Security from "./pages/Security";
import InvestmentServices from "./pages/InvestmentServices";
import FixedDepositAccounts from "./pages/FixedDepositAccounts";
import OpenFixedDeposit from "./pages/OpenFixedDeposit";
import StockMutualFunds from './pages/StockMutualFunds';
import StartInvesting from "./pages/StartInvesting";
import OpenAccount from "./pages/OpenAccount";
import InsuranceServices from "./pages/InsuranceServices";
// eslint-disable-next-line no-unused-vars
import HealthInsurance from "./pages/HealthInsurance";
// eslint-disable-next-line no-unused-vars
import LifeInsurance from "./pages/LifeInsurance";
// eslint-disable-next-line no-unused-vars
import PropertyInsurance from "./pages/PropertyInsurance";

const App = () => {
  const styles = {
    appWrapper: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    mainContent: {
      flex: "1", // Ensures this section grows to fill the space
    },
  };

  return (
    <Router>
      <div style={styles.appWrapper}>
        <Navbar /> {/* Navbar remains visible across all pages */}
        
        <div style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} /> {/* Redirects to Dashboard by default */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/history" element={<History />} />
            <Route path="/account" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/adminPage" element={<AdminPage />} /> {/* Correct route for AdminPage */}
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/privacy" element={<Privacy />} /> {/* Corrected route for Privacy */}
            <Route path="/terms" element={<Terms />} /> {/* Corrected route for Terms */}
            <Route path="/support" element={<Support />} />
            <Route path="/transactionForm" element={<TransactionForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transfer-money" element={<TransferMoney />} />
            <Route path="/view-account-statements" element={<ViewAccountStatements />} />
            <Route path="/loan-application" element={<LoanApplication />} />
            <Route path="/request-new-card" element={<RequestNewCard />} />
            <Route path="/quick-links" element={<QuickLinks />} />
            <Route path="/security" element={<Security />} />
            <Route path="/fixedDepositAccounts" element={<FixedDepositAccounts />} />
            <Route path="/investmentServices" element={<InvestmentServices />} />
            <Route path="/openFixedDeposit" element={<OpenFixedDeposit />} />
            <Route path="/stockMutualFunds" element={<StockMutualFunds />} />
            <Route path="/startInvesting" element={<StartInvesting />} />
            <Route path="/openAccount" element={<OpenAccount />} />
            <Route path="/insuranceServices" element={<InsuranceServices />} />
            <Route path="/lifeInsurance" element={<OpenAccount />} />
            <Route path="/healthInsurance" element={<OpenAccount />} />
            <Route path="/propertyInsurance" element={<OpenAccount />} />
          </Routes>
        </div>

        <Footer /> {/* Footer contains Privacy and Terms links */}
      </div>
    </Router>
  );
};

export default App;
