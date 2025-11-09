import type { Meta, StoryObj } from "@storybook/react-vite";
import { PlayersContainer } from "./players-container";
import { PlayerItem } from "./player-item";
import { RoomManagerContainer } from "../container/room-manager-container";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Components/RoomManager/Players/PlayersContainer",
  component: PlayersContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    timerText: "00:30",
  },
} satisfies Meta<typeof PlayersContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    timerText: "00:30",
    children: (
      <>
        <PlayerItem playerName="John Doe" timerText="00:25" />
        <Separator className="my-2" />
        <PlayerItem playerName="Jane Smith" timerText="00:28" />
        <Separator className="my-2" />
        <PlayerItem playerName="Bob Johnson" timerText="00:30" />
      </>
    ),
  },
};

export const SinglePlayer: Story = {
  args: {
    timerText: "01:15",
    children: <PlayerItem playerName="Alice Williams" timerText="01:10" />,
  },
};

export const MultiplePlayers: Story = {
  args: {
    timerText: "02:45",
    children: (
      <>
        <PlayerItem playerName="John Doe" timerText="02:30" />
        <Separator className="my-2" />
        <PlayerItem playerName="Jane Smith" timerText="02:35" />
        <Separator className="my-2" />
        <PlayerItem playerName="Bob Johnson" timerText="02:40" />
        <Separator className="my-2" />
        <PlayerItem playerName="Alice Williams" timerText="02:42" />
        <Separator className="my-2" />
        <PlayerItem playerName="Charlie Brown" timerText="02:45" />
      </>
    ),
  },
};

export const InRoomManager: Story = {
  args: {
    timerText: "01:30",
    children: (
      <>
        <PlayerItem playerName="John Doe" timerText="01:25" />
        <Separator className="my-2" />
        <PlayerItem playerName="Jane Smith" timerText="01:28" />
        <Separator className="my-2" />
        <PlayerItem playerName="Bob Johnson" timerText="01:30" />
      </>
    ),
  },
  render: (args) => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting In Progress"
        headerVariant="green"
      >
        <PlayersContainer {...args} />
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

