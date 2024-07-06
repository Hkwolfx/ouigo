import React from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmation</h2>
        <p>Voulez-vous réserver cette place ?</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Oui</button>
          <button onClick={onClose}>Non</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
