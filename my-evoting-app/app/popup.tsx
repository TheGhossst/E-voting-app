'use client' //popup.tsx
import React from 'react';
import styles from '../styles/popup.module.css';

interface PopupProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, isOpen, onClose }) => {
  return isOpen ? (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <div className={styles.popupMessage}>{message}</div>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export default Popup;