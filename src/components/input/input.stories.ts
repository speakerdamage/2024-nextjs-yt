import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Input>;
export const Playground: Story = {};
