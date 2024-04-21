'use client';  //You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.

import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

const Login: React.FC = () => {
    const [uid, setUid] = useState<string>('');
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [popupMessage, setPopupMessage] = useState<string>('');

    const handleUidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUid(e.target.value);
      };
    
    const handleLogin = async () => {
        const isValidUid = uid === 'blah';

        if (isValidUid) {
            setPopupMessage('Successfully logged in');
            setShowPopup(true);
          } else {
            setPopupMessage('Login failed');
            setShowPopup(true);
          }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className ={styles.container}>
            <div className = {styles.leftSection}>
                <h1 className = {styles.title}>E-Voting</h1>
                <h2 className = {styles.rulesLabel}>
                    Rules:
                </h2>
                <ul className={styles.rules}>
                    <li>1.  Only registered users can vote.</li>
                    <li>2.  Vote </li>
                </ul>
            </div>
            <div className = {styles.rightSection}>
                <h2 className={styles.formTitle}>Sign in to E-Voting</h2>
                <div className={styles.divider}> </div>
                <div className = {styles.formGroup}>
                <label htmlFor="uid">MBCET UID</label>
                    <input
                        type="text"
                        id="uid"
                        name="uid"
                        placeholder="Enter MBCET UID"
                        value={uid}
                        onChange={handleUidChange}
                    />
                </div>
                    <button  
                        onClick={handleLogin} 
                        className= {styles.button}>
                        Login
                    </button>
            </div>
            {showPopup && (
                <div className = {styles.popup}>
                    <div className = {styles.popupContent}>
                        <span className = {styles.popupMessage}>{popupMessage}</span>
                        <button 
                            onClick = {closePopup}
                            className = {styles.popupButton}>
                            OK
                        </button>
                    </div>
                </div>
            )}  
        </div>
  );
};

export default Login;