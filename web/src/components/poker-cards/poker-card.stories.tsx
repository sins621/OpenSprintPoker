import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { PokerCard, type PokerCardValue } from "./poker-card";

const meta = {
  title: "Components/Poker/Card",
  component: PokerCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    value: {
      control: "select",
      options: [
        "0",
        "1",
        "2",
        "3",
        "5",
        "8",
        "13",
        "21",
        "34",
        "55",
        "89",
        "?",
        "∞",
      ],
    },
  },
} satisfies Meta<typeof PokerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Zero: Story = {
  args: {
    value: "0",
  },
};

export const One: Story = {
  args: {
    value: "1",
  },
};

export const Two: Story = {
  args: {
    value: "2",
  },
};

export const Three: Story = {
  args: {
    value: "3",
  },
};

export const Five: Story = {
  args: {
    value: "5",
  },
};

export const Eight: Story = {
  args: {
    value: "8",
  },
};

export const Thirteen: Story = {
  args: {
    value: "13",
  },
};

export const TwentyOne: Story = {
  args: {
    value: "21",
  },
};

export const ThirtyFour: Story = {
  args: {
    value: "34",
  },
};

export const FiftyFive: Story = {
  args: {
    value: "55",
  },
};

export const EightyNine: Story = {
  args: {
    value: "89",
  },
};

export const QuestionMark: Story = {
  args: {
    value: "?",
  },
};

export const Infinity: Story = {
  args: {
    value: "∞",
  },
};

export const Selected: Story = {
  args: {
    value: "8",
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    value: "13",
    disabled: true,
  },
};

export const AllCards: Story = {
  args: {
    value: "0",
  },
  render: () => {
    const values: PokerCardValue[] = [
      "0",
      "1",
      "2",
      "3",
      "5",
      "8",
      "13",
      "21",
      "34",
      "55",
      "89",
      "?",
      "∞",
    ];

    return (
      <div className="flex flex-wrap gap-4 justify-center p-8">
        {values.map((value) => (
          <PokerCard key={value} value={value} onClick={fn()} />
        ))}
      </div>
    );
  },
};
