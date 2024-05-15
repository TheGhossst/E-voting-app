'use client' // Navbar.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';
import Logo from './logo';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <Logo /> { }
            <ul className={styles.navLinks}>
                <li key="home">
                    <button className={styles.navButton} role="button">
                        Home
                    </button>
                </li>
                <li key="about">
                    <button className={styles.navButton} role="button">
                        About
                    </button>
                </li>
                <li key="contact">
                    <button className={styles.navButton} role="button">
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;