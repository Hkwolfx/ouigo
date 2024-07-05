import React, { useState } from 'react';
import './SeatNumbers.css';

interface SeatNumbersProps {
  onWagonChange: (wagon: number) => void;
}

const SeatNumbers: React.FC<SeatNumbersProps> = ({ onWagonChange }) => {
  const [activeNumber, setActiveNumber] = useState<number | null>(null);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleClick = (number: number) => {
    setActiveNumber(number);
    onWagonChange(number);
  };

  return (
    <div className="seat-numbers">
      {numbers.map((number) => (
        <div 
          key={number} 
          className={`seat-number ${activeNumber === number ? 'active' : ''} ${number === 1 ? 'special-top' : number === 8 ? 'special-bottom' : ''}`} 
          onClick={() => handleClick(number)}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default SeatNumbers;
