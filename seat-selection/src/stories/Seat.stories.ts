import type { Meta, StoryObj } from '@storybook/react';
import Seat from '../components/Seat';

const meta: Meta<typeof Seat> = {
  title: 'Seat',
  component: Seat,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: 'centered',
  },
  argTypes: {
    status: { control: 'select', options: ['available', 'selected', 'unavailable', 'invisible'] },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Available: Story = {
  args: {
    status: 'available',
    onClick: () => alert('Seat clicked!'),
  },
};

export const Selected: Story = {
  args: {
    status: 'selected',
    onClick: () => alert('Seat clicked!'),
  },
};

export const Unavailable: Story = {
  args: {
    status: 'unavailable',
    onClick: () => alert('Seat clicked!'),
  },
};

export const Invisible: Story = {
  args: {
    status: 'invisible',
    onClick: () => alert('Seat clicked!'),
  },
};
