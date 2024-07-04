import React, { useState } from 'react';
import SeatLayout from './components/SeatLayout';
import './App.css';

const initialLayout = [
  ['available', 'available', 'unavailable'],
  ['available', 'selected', 'available'],
  ['unavailable', 'available', 'available'],
];

const App: React.FC = () => {
  const [layout, setLayout] = useState(initialLayout);

  const handleSeatClick = (row: number, col: number) => {
    const newLayout = [...layout];
    if (newLayout[row][col] === 'available') {
      newLayout[row][col] = 'selected';
    } else if (newLayout[row][col] === 'selected') {
      newLayout[row][col] = 'available';
    }
    setLayout(newLayout);
  };

  return (
    <div className="App">
      <SeatLayout layout={layout} onSeatClick={handleSeatClick} />
    </div>
  );
};

export default App;
