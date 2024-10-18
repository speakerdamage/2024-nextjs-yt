import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from './button';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  argTypes: {
    // update children to text
    children: {
      control: {
        type: 'text',
      },
    },
    //update variant and size to dropdown select
    variant: {
      options: ['primary', 'secondary', 'empty'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['sm', 'base'],
      control: {
        type: 'select',
      },
    },
    //update disabled to a boolean
    disabled: {
      control: 'boolean',
    },
  },
  //define default props
  args: {
    variant: 'primary',
    size: 'base',
    children: 'Button',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;
export const Playground: Story = {};
