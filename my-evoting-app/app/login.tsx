'use client' // login.tsx
import React from 'react';
import styles from '../styles/Login.module.css';
import Navbar from './navbar';

const Login: React.FC = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <h2 className={styles.formHeading}>LOGIN FORM</h2>
          <input type="text" placeholder="Enter your MBCET ID" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <button className={styles.signInButton}>SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;