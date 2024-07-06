import type { Meta, StoryObj } from '@storybook/react';
import SeatLayout from '../components/SeatLayout';

const meta: Meta<typeof SeatLayout> = {
  title: 'SeatLayout',
  component: SeatLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Centrer le composant
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

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

export const TemplateLayout: Story = {
  args: {
    layout: seatTemplate,
    onSeatClick: (row: number, col: number) => {
      console.log(`Seat clicked: row ${row}, col ${col}`);
    },
  },
};
