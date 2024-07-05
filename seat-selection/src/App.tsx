import React from 'react';
import SeatLayout from './components/SeatLayout';
import SeatNumbers from './components/SeatNumbers';

const seatTemplate = [
  ['available', 'available', 'invisible', 'available', 'available'],
  ['available', 'unavailable', 'invisible', 'available', 'unavailable'],
  ['unavailable', 'available', 'invisible', 'available', 'available'],
  ['unavailable', 'available', 'invisible', 'available', 'available'],
  ['unavailable', 'available', 'invisible', 'available', 'available'],
  ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
  ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['available', 'available', 'invisible', 'available', 'available'],
  ['available', 'unavailable', 'invisible', 'available', 'unavailable'],
  ['unavailable', 'available', 'invisible', 'available', 'available'],
  ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
  ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
  ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
];

const App: React.FC = () => {
  const handleSeatClick = (row: number, col: number) => {
    console.log(`Seat clicked: row ${row}, col ${col}`);
  };

  return (
    <div className="App">
      <>
      <SeatLayout layout={seatTemplate} onSeatClick={handleSeatClick} />
      </>
    </div>
  );
};

export default App;
