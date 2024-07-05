import React from 'react';
import Seat from './Seat';
import SeatNumbers from './SeatNumbers';
import './SeatLayout.css';

interface SeatLayoutProps {
  layout: string[][];
  onSeatClick: (row: number, col: number) => void;
}

const SeatLayout: React.FC<SeatLayoutProps> = ({ layout, onSeatClick }) => {
  return (
    <div className="seat-layout-background">
      <div className="seat-layout-container">
        
        <div className="seat-layout">
          {layout.map((row, rowIndex) => (
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
       
      </div>
      <SeatNumbers />
    </div>
  );
};

export default SeatLayout;
