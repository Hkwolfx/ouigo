import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Seat from '../components/Seat';

export default {
  title: 'Seat',
  component: Seat,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: 'centered',
  },
} satisfies Meta<typeof Seat>;

type Story = StoryObj<typeof meta>;

export const Available: Story = {
  args: {
    status: 'available',
  },
};

export const Selected: Story = {
  args: {
    status: 'selected',
  },
};

export const Unavailable: Story = {
  args: {
    status: 'unavailable',
  },
};
