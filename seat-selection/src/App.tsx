import React from 'react';
import SeatLayout from './components/SeatLayout';


const seatTemplate = [
  [{ status: 'available', hasPowerOutlet: true }, { status: 'available' }, { status: 'invisible' }, { status: 'available' }, { status: 'available', hasPowerOutlet: false }],
  [{ status: 'available' }, { status: 'unavailable' }, { status: 'invisible' }, { status: 'available' }, { status: 'unavailable' }],
  [{ status: 'unavailable' }, { status: 'available', hasPowerOutlet: true }, { status: 'invisible' }, { status: 'available' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available' }, { status: 'invisible' }, { status: 'available' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available', hasPowerOutlet: true }, { status: 'invisible' }, { status: 'available' }, { status: 'available' }],
  [{ status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }],
  [{ status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }],
  [{ status: 'unavailable' }, { status: 'available', hasPowerOutlet: true }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available' }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available', hasPowerOutlet: true }],
  [{ status: 'unavailable' }, { status: 'available' }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available', hasPowerOutlet: true }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available' }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available', hasPowerOutlet: true }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available' }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'available' }, { status: 'available' }, { status: 'invisible' }, { status: 'available', hasPowerOutlet: true }, { status: 'available' }],
  [{ status: 'available' }, { status: 'unavailable' }, { status: 'invisible' }, { status: 'available' }, { status: 'unavailable' }],
  [{ status: 'unavailable' }, { status: 'available' }, { status: 'invisible' }, { status: 'available' }, { status: 'available' }],
  [{ status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }],
  [{ status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }, { status: 'invisible' }],
  [{ status: 'unavailable' }, { status: 'available', hasPowerOutlet: true }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available' }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available', hasPowerOutlet: true }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available' }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
  [{ status: 'unavailable' }, { status: 'available', hasPowerOutlet: true }, { status: 'invisible' }, { status: 'unavailable' }, { status: 'available' }],
];

const App: React.FC = () => {
  const handleSeatClick = (row: number, col: number) => {
    console.log(`Seat clicked: row ${row}, col ${col}`);
  };

  return (
    
      <>
      <div className="Container">
      <SeatLayout layout={seatTemplate} onSeatClick={handleSeatClick} />
      </div>
      </>
    
  );
};

export default App;
