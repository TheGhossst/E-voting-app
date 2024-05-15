'use client' 
// navbar.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>E-Voting</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <button className={styles.navButton}>Home</button>
        </li>
        <li>
          <button className={styles.navButton}>About</button>
        </li>
        <li>
          <button className={styles.navButton}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;