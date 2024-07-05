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
  const [originalLayout, setOriginalLayout] = useState(layout);
  const [selectedSeat, setSelectedSeat] = useState<{ row: number, col: number } | null>(null);

  const handleSeatClick = (row: number, col: number) => {
    setCurrentLayout(prevLayout => 
      prevLayout.map((r, rowIndex) => 
        r.map((seat, colIndex) => {
          if (rowIndex === row && colIndex === col) {
            return 'selected';
          }
          if (selectedSeat && selectedSeat.row === rowIndex && selectedSeat.col === colIndex) {
            return originalLayout[rowIndex][colIndex];
          }
          return seat;
        })
      )
    );

    setSelectedSeat({ row, col });

    // Delay the confirmation prompt to ensure the state update is rendered
    setTimeout(() => {
      const userConfirmed = window.confirm('Voulez-vous réserver cette place ?');

      if (userConfirmed) {
        alert('Merci d\'avoir joué avec la démo !');
      } else {
        setCurrentLayout(prevLayout => 
          prevLayout.map((r, rowIndex) => 
            r.map((seat, colIndex) => {
              if (rowIndex === row && colIndex === col) {
                return originalLayout[rowIndex][colIndex];
              }
              return seat;
            })
          )
        );
        setSelectedSeat(null);
        alert('Veuillez sélectionner une autre place.');
      }
    }, 0);
  };

  const handleWagonChange = (wagon: number) => {
    alert(`Changed to wagon ${wagon}`);

    // Reset the selection and change the seat layout for the new wagon
    const newLayout = originalLayout.map(row => 
      row.map(seat => seat === 'available' ? 'unavailable' : seat === 'unavailable' ? 'available' : seat)
    );
    
    setCurrentLayout(newLayout);
    setOriginalLayout(newLayout);
    setSelectedSeat(null); // Reset the selected seat
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
                  onClick={() => {
                    handleSeatClick(rowIndex, colIndex);
                    onSeatClick(rowIndex, colIndex);
                  }}
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