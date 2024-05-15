'use client' // Navbar.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';
import Logo from './logo'; 

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Logo /> {}
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