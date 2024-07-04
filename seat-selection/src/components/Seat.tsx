import React from 'react';
import './Seat.css';

interface SeatProps {
  status: 'available' | 'selected' | 'unavailable';
  onClick: () => void;
}

const Seat: React.FC<SeatProps> = ({ status, onClick }) => {
  return (
    <div className={`seat ${status}`} onClick={onClick}>
     
    </div>
  );
};

export default Seat;
