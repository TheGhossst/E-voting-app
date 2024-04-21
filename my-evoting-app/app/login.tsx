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
        
    };


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
        <button onClick={handleLogin} className={styles.button}>
          Login
        </button>
      </div>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.popupMessage}>{popupMessage}</span>
            <button onClick={closePopup} className={styles.popupButton}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;