import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, type AvatarProps } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['sm', 'base', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    size: 'base',
    src: 'https://www.slashfilm.com/img/gallery/how-drunken-master-completely-changed-jackie-chans-career/an-unchanging-avatar-of-confucian-virtue-1656774643.jpg',
    alt: 'clint rocks',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;
export const Playground: Story = {};
