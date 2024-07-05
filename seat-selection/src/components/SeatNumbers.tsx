import React from 'react';
import './SeatNumbers.css';

const SeatNumbers: React.FC = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="seat-numbers">
      {numbers.map((number) => (
        <div key={number} className="seat-number">
          {number}
        </div>
      ))}
    </div>
  );
};

export default SeatNumbers;
