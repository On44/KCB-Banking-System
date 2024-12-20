import React from 'react';

const Privacy = () => {
  // Inline styles for Privacy page
  const styles = {
    privacyPage: {
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
    <div style={styles.privacyPage}>
      <h1 style={styles.title}>Privacy Policy</h1>

      <section>
        <h2 style={styles.sectionTitle}>Introduction</h2>
        <p style={styles.paragraph}>
          Welcome to our Privacy Policy page. Your privacy is very important to us. This policy outlines the types of personal information that we collect and how we use it.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Information We Collect</h2>
        <p style={styles.paragraph}>
          We collect several types of information for various purposes to provide and improve our services.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Personal Data: Name, email, and other contact details.</li>
          <li style={styles.listItem}>Usage Data: Data on how the service is accessed and used.</li>
        </ul>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>How We Use Your Information</h2>
        <p style={styles.paragraph}>
          We use the collected data for various purposes, including to:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Provide and maintain our service</li>
          <li style={styles.listItem}>Notify you about changes to our service</li>
          <li style={styles.listItem}>Provide customer support</li>
        </ul>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Data Security</h2>
        <p style={styles.paragraph}>
          We take the security of your data seriously. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Your Data Protection Rights</h2>
        <p style={styles.paragraph}>
          You have the right to access, update, or delete the personal information we hold about you.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Changes to This Policy</h2>
        <p style={styles.paragraph}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <section>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions about this Privacy Policy, please contact us at [contact@yourcompany.com].
        </p>
      </section>
    </div>
  );
};

export default Privacy;
