import React from 'react';

interface SeatProps {
  status: 'available' | 'selected' | 'unavailable' | 'invisible';
  onClick: () => void;
  style?: React.CSSProperties;
}

const Seat: React.FC<SeatProps> = ({ status, onClick, style }) => {
  const getSeatClass = () => {
    switch (status) {
      case 'available':
        return 'seat-available';
      case 'selected':
        return 'seat-selected';
      case 'unavailable':
        return 'seat-unavailable';
      case 'invisible':
        return 'seat-invisible';
      default:
        return '';
    }
  };

  return (
    <div className={`seat ${getSeatClass()}`} onClick={onClick} style={style}></div>
  );
};

export default Seat;
