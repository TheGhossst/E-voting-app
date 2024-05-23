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
        <span className={styles.popupMessage}>{message}</span>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export default Popup;