//login.tsx
'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/Login.module.css';
import Navbar from './navbar';
import Popup from './popup';

const Login: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showFailedPopup, setShowFailedPopup] = useState(false);
  const router = useRouter();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const testId = 'MBTCS2172';
    const testPassword = 'password';
    if (id === testId && password === testPassword) {
      setShowSuccessPopup(true);
    } else {
      setShowFailedPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    setShowFailedPopup(false);
  };

  if (showSuccessPopup) {
    router.push('/twofactor');  
  }

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <h2 className={styles.formHeading}>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your MBCET ID"
              className={styles.input}
              value={id}
              onChange={handleIdChange}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" className={styles.signInButton}>
              SIGN IN
            </button>
          </form>
        </div>
      </div>
      <Popup
        isOpen={showSuccessPopup}
        message="Login successful!"
        onClose={handleClosePopup}
      />
      <Popup
        isOpen={showFailedPopup}
        message="Login failed. Please try again."
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default Login;