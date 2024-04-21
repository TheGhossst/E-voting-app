import React, { useState } from 'react';
import styles from '../styles/Login.module.css';


return (
    <div className={styles.container}>
      <h1 className={styles.title}>E-Voting Login</h1>
      <div className={styles.loginContainer}>
        <input
          type="text"
          placeholder="Enter MBCET UID"
          value={uid}
          onChange={handleUidChange}
          className={styles.input}
        />
