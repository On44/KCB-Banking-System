import React, { useState } from "react";

const Support = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    section: {
      marginBottom: "30px",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#004d26", // KCB brand color
      marginBottom: "10px",
    },
    liveChat: {
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "15px",
      backgroundColor: "#f9f9f9",
    },
    chatWindow: {
      height: "200px",
      overflowY: "auto",
      border: "1px solid #ccc",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#fff",
    },
    chatInput: {
      display: "flex",
      gap: "10px",
    },
    input: {
      flex: "1",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      padding: "10px 15px",
      backgroundColor: "#004d26",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    faq: {
      listStyle: "none",
      padding: "0",
    },
    faqItem: {
      marginBottom: "10px",
    },
    feedback: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    map: {
      width: "100%",
      height: "300px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory([...chatHistory, { sender: "User", message: chatMessage }]);
      setChatMessage("");
      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          { sender: "Support", message: "Thank you for your query. We'll assist you shortly!" },
        ]);
      }, 1000);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h2 style={styles.header}>Live Chat/Support</h2>
        <div style={styles.liveChat}>
          <div style={styles.chatWindow}>
            {chatHistory.map((chat, index) => (
              <p key={index}>
                <strong>{chat.sender}:</strong> {chat.message}
              </p>
            ))}
          </div>
          <div style={styles.chatInput}>
            <input
              style={styles.input}
              type="text"
              placeholder="Type your message..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <button style={styles.button} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.header}>FAQs and Knowledge Base</h2>
        <ul style={styles.faq}>
          <li style={styles.faqItem}>
            <strong>Q:</strong> How do I reset my password? <br />
            <strong>A:</strong> Go to the login page and click "Forgot Password."
          </li>
          <li style={styles.faqItem}>
            <strong>Q:</strong> How do I apply for a loan? <br />
            <strong>A:</strong> Visit the Loan Application page under Loans and Credit.
          </li>
          <li style={styles.faqItem}>
            <strong>Q:</strong> Where can I find my transaction history? <br />
            <strong>A:</strong> Navigate to the "History" page in your account dashboard.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.header}>Feedback/Complaints</h2>
        <form style={styles.feedback}>
          <textarea
            style={{ ...styles.input, height: "100px" }}
            placeholder="Share your feedback or log a complaint..."
          ></textarea>
          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>

      <div style={styles.section}>
        <h2 style={styles.header}>Branch Locator</h2>
        <iframe
          style={styles.map}
          title="Branch Locator"
          src="https://www.google.com/maps/embed/v1/search?key=YOUR_GOOGLE_MAPS_API_KEY&q=KCB+Branches"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Support;
