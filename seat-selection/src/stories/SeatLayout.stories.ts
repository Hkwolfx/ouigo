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
  ['available', 'invisible', 'available'],
  ['unavailable', 'unavailable', 'available'],
  ['available', 'available', 'available'],
  ['unavailable', 'unavailable', 'available'],
  ['unavailable', 'unavailable', 'available'],
  ['available', 'available', 'available'],
  ['available', 'available', 'available'],
  ['available', 'available', 'available'],
  ['available', 'available', 'available'],
];

export const TemplateLayout: Story = {
  args: {
    layout: seatTemplate,
    onSeatClick: (row: number, col: number) => {
      alert(`Seat clicked: row ${row}, col ${col}`);
    },
  },
};
