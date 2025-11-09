import type { Meta, StoryObj } from "@storybook/react-vite";
import { GameManager } from "./game-manager";
import { RoomManagerContainer } from "../container/room-manager-container";

const meta = {
  title: "Components/RoomManager/GameManager",
  component: GameManager,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onResetTimer: () => {
      console.log("onResetTimer called");
    },
    onFlipCards: () => {
      console.log("onFlipCards called");
    },
    onClearVotes: () => {
      console.log("onClearVotes called");
    },
    onSkipStory: () => {
      console.log("onSkipStory called");
    },
    onNextStory: () => {
      console.log("onNextStory called");
    },
    onFinishVoting: (value: string) => {
      console.log("onFinishVoting called with value:", value);
    },
  },
} satisfies Meta<typeof GameManager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playing: Story = {
  args: {
    state: "playing",
  },
};

export const Idle: Story = {
  args: {
    state: "idle",
  },
};

export const Moderator: Story = {
  args: {
    state: "moderator",
  },
};

export const InRoomManagerPlaying: Story = {
  args: {
    state: "playing",
  },
  render: (args) => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting In Progress"
        headerVariant="green"
      >
        <GameManager {...args} />
      </RoomManagerContainer>
    );
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "500px", margin: "0 auto" }}>
          <Story />
        </div>
      );
    },
  ],
};

export const InRoomManagerIdle: Story = {
  args: {
    state: "idle",
  },
  render: (args) => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting Completed"
        headerVariant="yellow"
      >
        <GameManager {...args} />
      </RoomManagerContainer>
    );
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "500px", margin: "0 auto" }}>
          <Story />
        </div>
      );
    },
  ],
};

export const InRoomManagerModerator: Story = {
  args: {
    state: "moderator",
  },
  render: (args) => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Moderator Controls"
        headerVariant="default"
      >
        <GameManager {...args} />
      </RoomManagerContainer>
    );
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "500px", margin: "0 auto" }}>
          <Story />
        </div>
      );
    },
  ],
};

