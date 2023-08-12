import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2022 Document Sharing App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;