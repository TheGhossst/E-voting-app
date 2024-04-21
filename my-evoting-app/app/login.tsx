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
                <p className = {styles.description}>
                    Lorem ipsum dolor sit amet consect
                </p>
            </div>  
        </div>
  );
};

export default Login;