import React, { useState } from 'react';
import Seat from './Seat';
import SeatNumbers from './SeatNumbers';
import './SeatLayout.css';

interface SeatLayoutProps {
  layout: string[][];
  onSeatClick: (row: number, col: number) => void;
}

const SeatLayout: React.FC<SeatLayoutProps> = ({ layout, onSeatClick }) => {
  const [currentLayout, setCurrentLayout] = useState(layout);

  const handleWagonChange = (wagon: number) => {
    alert(`Changed to wagon ${wagon}`);

    // change the seat layout for the new wagon
    const newLayout = currentLayout.map(row => 
      row.map(seat => seat === 'available' ? 'unavailable' : seat === 'unavailable' ? 'available' : seat)
    );
    
    setCurrentLayout(newLayout);
  };

  return (
    <div className="seat-layout-background">
      <div className="seat-layout-container">
        
        <div className="seat-layout">
          {currentLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {row.map((seat, colIndex) => (
                <Seat
                  key={colIndex}
                  status={seat as 'available' | 'selected' | 'unavailable' | 'invisible'}
                  onClick={() => onSeatClick(rowIndex, colIndex)}
                />
              ))}
            </div>
          ))}
        </div>
        <SeatNumbers onWagonChange={handleWagonChange} />
      </div>
    </div>
  );
};

export default SeatLayout;
