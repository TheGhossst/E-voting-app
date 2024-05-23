// 2fa.tsx
import React, { useState } from 'react';
import styles from '../styles/2fa.module.css';

const userEmail = 'user@example.com';
const userPhoneNumber = '+1234567890';

const TwoFactorAuth: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'email' | 'phone' | 'authenticator' | null>(null);
  const [code, setCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleOptionSelect = (option: 'email' | 'phone' | 'authenticator') => {
    setSelectedOption(option);
    setIsVerified(false);
    setCode('');

    switch (option) {
      case 'email':
        console.log(`Code sent to ${userEmail}`);
        break;
      case 'phone':
        console.log(`Code sent to ${userPhoneNumber}`);
        break;
      case 'authenticator':
        console.log('Code sent to authenticator');
        break;
      default:
        break;
    }
  };

  const handleVerify = () => {
    //blah
    const isCodeValid = verifyCode(code);

    setIsVerified(isCodeValid);

    if (isCodeValid) {
      console.log('2FA verification successful!');
      //blah
    } else {
      console.log('Invalid code, please try again.');
    }
  };

  // Dummy function 
  const verifyCode = (enteredCode: string) => {
    const expectedCode = '123456'; 
    return enteredCode === expectedCode;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Two-Factor Authentication</h2>
      <div className={styles.optionsContainer}>
        <button
          className={styles.option}
          onClick={() => handleOptionSelect('email')}
          disabled={selectedOption !== null}
        >
          Via Email
        </button>
        <button
          className={styles.option}
          onClick={() => handleOptionSelect('phone')}
          disabled={selectedOption !== null}
        >
          Via Phone
        </button>
        <button
          className={styles.option}
          onClick={() => handleOptionSelect('authenticator')}
          disabled={selectedOption !== null}
        >
          Authenticator
        </button>
      </div>
      {selectedOption && (
        <div className={styles.codeInputContainer}>
          <input
            type="text"
            placeholder="Enter the code"
            className={styles.codeInput}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            disabled={isVerified}
          />
          <button className={styles.verifyButton} onClick={handleVerify} disabled={isVerified}>
            Verify
          </button>
          {isVerified && <p className={styles.successMessage}>Verification successful!</p>}
        </div>
      )}
    </div>
  );
};

export default TwoFactorAuth;