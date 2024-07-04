import type { Meta, StoryObj } from '@storybook/react';
import SeatLayout from '../components/SeatLayout';

const meta: Meta<typeof SeatLayout> = {
  title: 'SeatLayout',
  component: SeatLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const seatTemplate = [
    ['available', 'available', 'invisible', 'available', 'available'],
    ['available', 'unavailable', 'invisible', 'available', 'unavailable'],
    ['unavailable', 'available', 'invisible', 'available', 'available'],
    ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
    ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
    ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
    ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
    ['unavailable', 'available', 'invisible', 'unavailable', 'available'],
    ['available', 'available', 'invisible', 'invisible', 'invisible'],
    ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
    ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
    ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
    ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
    ['invisible', 'invisible', 'invisible', 'invisible', 'invisible'],
];

export const TemplateLayout: Story = {
  args: {
    layout: seatTemplate,
    onSeatClick: (row: number, col: number) => {
      alert(`Seat clicked: row ${row}, col ${col}`);
    },
  },
};
