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
  const [selectedSeat, setSelectedSeat] = useState<{ row: number, col: number, number: number } | null>(null);
  const [seatNumber, setSeatNumber] = useState<number>(1);
  const [currentWagon, setCurrentWagon] = useState<number>(1); // Nouvelle state pour le numéro de wagon

  const handleSeatClick = (row: number, col: number) => {
    if (currentLayout[row][col] === 'unavailable') {
      return;
    }

    const randomSeatNumber = Math.floor(Math.random() * 99) + 1;

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

    setSelectedSeat({ row, col, number: randomSeatNumber });

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
    console.log(`Changed to wagon ${wagon}`);
    setCurrentWagon(wagon); // Mise à jour du numéro de wagon en cours

    const newLayout = originalLayout.map(row => 
      row.map(seat => {
        if (seat === 'invisible') {
          return seat; // Les sièges invisibles ne changent pas
        }
        return Math.random() < 0.5 ? 'available' : 'unavailable';
      })
    );

    setCurrentLayout(newLayout);
    setOriginalLayout(newLayout);
    setSelectedSeat(null);
  };

  return (
    <div className="seat-layout-background">
      <div className="current-wagon">
        {currentWagon}
      </div>
      <div className="seat-layout-container">
        <div className="seat-layout">
          {currentLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {row.map((seat, colIndex) => (
                <Seat
                  key={colIndex}
                  status={seat as 'available' | 'selected' | 'unavailable' | 'invisible'}
                  number={selectedSeat && selectedSeat.row === rowIndex && selectedSeat.col === colIndex ? selectedSeat.number : undefined}
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
