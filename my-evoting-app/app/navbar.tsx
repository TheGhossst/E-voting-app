"use client"; // Navbar.tsx
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Logo from "./logo";
import { House, Info, X } from "@phosphor-icons/react";

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
            <House size={32} />
            </button>
          </li>
            <button
              className={styles.navButton}
              role="button"
              onClick={togglePopup}
            >
              <Info size={32} />
            </button>
        </ul>
      </nav>

      {isPopupVisible && (
        <div className={styles.popup} onFocus={togglePopup}>
          <div className={styles.popupContent}>
            <span className={styles.close} onClick={closePopup}>
              <X size={32} />
            </span>
            <h2>Rules</h2>
            <ul>
              <li>
                <h3>Rule 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi vitae et quasi obcaecati tempore explicabo dignissimos eos pariatur qui, libero accusantium numquam omnis aliquid eius deserunt? Natus, praesentium exercitationem?</p>
              </li>
              <li>
                <h3>Rule 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi vitae et quasi obcaecati tempore explicabo dignissimos eos pariatur qui, libero accusantium numquam omnis aliquid eius deserunt? Natus, praesentium exercitationem?</p>
              </li>
              <li>
                <h3>Rule 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi vitae et quasi obcaecati tempore explicabo dignissimos eos pariatur qui, libero accusantium numquam omnis aliquid eius deserunt? Natus, praesentium exercitationem?</p>
              </li>
              <li>
                <h3>Rule 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi vitae et quasi obcaecati tempore explicabo dignissimos eos pariatur qui, libero accusantium numquam omnis aliquid eius deserunt? Natus, praesentium exercitationem?</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;