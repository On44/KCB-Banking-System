import React from 'react';

const Terms = () => {
  // Inline styles for Terms page
  const styles = {
    termsPage: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '2rem',
      color: '#333',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      marginTop: '20px',
      color: '#444',
    },
    paragraph: {
      lineHeight: '1.6',
      color: '#555',
    },
    list: {
      marginLeft: '20px',
    },
    listItem: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.termsPage}>
      <h1 style={styles.title}>Terms and Conditions</h1>

      <section>
        <h2 style={styles.sectionTitle}>Introduction</h2>
        <p style={styles.paragraph}>
          Welcome to our website! These Terms and Conditions govern your use of our services and website. By accessing or using the website, you agree to abide by these terms. Please read them carefully.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Use of Our Services</h2>
        <p style={styles.paragraph}>
          You agree to use our services in accordance with all applicable laws and regulations. Any misuse of our services or breach of these terms may result in the termination of your access to the website.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Account Registration</h2>
        <p style={styles.paragraph}>
          If you register for an account, you must provide accurate information. You are responsible for maintaining the confidentiality of your account and password.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Intellectual Property</h2>
        <p style={styles.paragraph}>
          All content on the website, including text, images, logos, and trademarks, is the property of the company and is protected by copyright laws. You may not use any content from the website without prior written permission.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Privacy Policy</h2>
        <p style={styles.paragraph}>
          Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of your information as described in the Privacy Policy.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Limitations of Liability</h2>
        <p style={styles.paragraph}>
          We are not liable for any direct, indirect, or consequential damages arising from the use of our services or website. Your use of the services is at your own risk.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Termination</h2>
        <p style={styles.paragraph}>
          We reserve the right to suspend or terminate your access to our services if you violate these Terms and Conditions. You may terminate your account at any time by contacting us.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Governing Law</h2>
        <p style={styles.paragraph}>
          These terms and conditions shall be governed by and construed in accordance with the laws of [Your Country]. Any disputes will be subject to the exclusive jurisdiction of the courts in [Your Country].
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Changes to Terms</h2>
        <p style={styles.paragraph}>
          We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms on this page. Please review this page regularly.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions about these Terms and Conditions, please contact us at [contact@yourcompany.com].
        </p>
      </section>
    </div>
  );
};

export default Terms;
