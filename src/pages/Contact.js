import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    alert("Your message has been sent successfully!");
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "20px auto",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#004d26", // KCB brand color
      marginBottom: "10px",
      textAlign: "center",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#333",
      marginBottom: "20px",
      textAlign: "justify",
    },
    inputField: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    textareaField: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
      height: "150px",
      resize: "none",
    },
    button: {
      display: "block",
      padding: "10px 20px",
      backgroundColor: "#004d26", // KCB brand color
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      textAlign: "center",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <p style={styles.paragraph}>
        We are here to help! Please feel free to reach out if you have any
        questions, inquiries, or need assistance. Fill out the form below, and
        our team will get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={styles.inputField}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={styles.inputField}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          style={styles.textareaField}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
