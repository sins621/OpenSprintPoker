import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkipStoryModal } from "./skip-story-modal";

const meta = {
  title: "Components/RoomManager/SkipStoryModal",
  component: SkipStoryModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    open: true,
    onOpenChange: (open: boolean) => {
      console.log("onOpenChange called with:", open);
    },
    onSkip: () => {
      console.log("onSkip called");
    },
    onCancel: () => {
      console.log("onCancel called");
    },
  },
} satisfies Meta<typeof SkipStoryModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
};

export const Closed: Story = {
  args: {
    open: false,
  },
};

