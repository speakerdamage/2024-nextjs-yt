import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<typeof Text>;
export const Playground: Story = {};
