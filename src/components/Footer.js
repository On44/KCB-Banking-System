import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#004d26", // KCB brand color
      color: "white",
      padding: "15px 0",
      textAlign: "center",
      fontSize: "14px",
      position: "relative", // Make it flow naturally with the page
      bottom: "0",
      width: "100%",
    },
    link: {
      color: "white",
      textDecoration: "none",
      marginLeft: "10px",
      marginRight: "10px",
    },
    linkHover: {
      textDecoration: "underline",
    },
    navbarLinks: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "inline-flex",
    },
    navbarLink: {
      color: "white",
      margin: "0 10px",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} KCB Bank. All Rights Reserved.
      </p>
      <ul style={styles.navbarLinks}>
        <li>
          <Link to="/privacy" style={styles.navbarLink}>
            Privacy
          </Link>
        </li>
        <li>
          <Link to="/terms" style={styles.navbarLink}>
            Terms
          </Link>
        </li>
        <li>
          <Link to="/support" style={styles.navbarLink}>
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
