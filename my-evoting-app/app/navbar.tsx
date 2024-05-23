"use client"; // Navbar.tsx
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Logo from "./logo";

const Navbar: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Logo />
        <ul className={styles.navLinks}>
          <li key="home">
            <button className={styles.navButton} role="button">
              Home
            </button>
          </li>
          <li key="about">
            <button
              className={styles.navButton}
              role="button"
              onClick={togglePopup}
            >
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

      {isPopupVisible && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={closePopup}>
              &times;
            </span>
            <h2>Rules</h2>
            <p>1. Rule one</p>
            <p>2. Rule two</p>
            <p>3. Rule three</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;