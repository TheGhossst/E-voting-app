'use client' // Logo.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <h1>E-Voting</h1>
    </div>
  );
};

export default Logo;