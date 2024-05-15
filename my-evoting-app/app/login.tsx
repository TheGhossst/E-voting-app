'use client'
import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dummyEmail = 'blah';
    const dummyPassword = 'blah';

    if (email === dummyEmail && password === dummyPassword) {
      setPopupMessage('Successfully logged in');
      setShowPopup(true);
    } else {
      setPopupMessage('Login failed, try again');
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>E-Voting</h1>
        <span className={styles.letter}>Login</span>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your MBCET UID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.loginButton}>
            LOGIN
          </button>
        </form>
      </div>

      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.closeButton} onClick={handleClosePopup}>
              &times;
            </span>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;