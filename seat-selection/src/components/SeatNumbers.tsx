import React from 'react';
import './SeatNumbers.css';

interface SeatNumbersProps {
  onWagonChange: (wagon: number) => void;
}

const SeatNumbers: React.FC<SeatNumbersProps> = ({ onWagonChange }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="seat-numbers">
      {numbers.map((number) => (
        <div key={number} className="seat-number" onClick={() => onWagonChange(number)}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default SeatNumbers;
