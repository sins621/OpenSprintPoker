import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { RoomManagerContainer } from "../container/room-manager-container";
import { PlayersContainer } from "./players-container";
import { PlayerItem } from "./player-item";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Components/RoomManager/Players",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllThinking: Story = {
  render: () => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting In Progress"
        headerVariant="green"
      >
        <PlayersContainer timerText="01:30">
          <PlayerItem playerName="John Doe" timerText="01:25" isThinking />
          <Separator className="my-2" />
          <PlayerItem playerName="Jane Smith" timerText="01:28" isThinking />
          <Separator className="my-2" />
          <PlayerItem playerName="Bob Johnson" timerText="01:30" isThinking />
        </PlayersContainer>
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

export const MixedStates: Story = {
  render: () => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting In Progress"
        headerVariant="green"
      >
        <PlayersContainer timerText="01:30">
          <PlayerItem playerName="John Doe" timerText="01:25" isThinking />
          <Separator className="my-2" />
          <PlayerItem playerName="Jane Smith" timerText="01:28" cardValue="13" />
          <Separator className="my-2" />
          <PlayerItem playerName="Bob Johnson" timerText="01:30" isThinking />
          <Separator className="my-2" />
          <PlayerItem playerName="Alice Williams" timerText="01:32" cardValue="21" />
          <Separator className="my-2" />
          <PlayerItem playerName="Charlie Brown" timerText="01:35" cardValue="?" />
        </PlayersContainer>
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

export const AllVoted: Story = {
  render: () => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting Completed"
        headerVariant="yellow"
      >
        <PlayersContainer timerText="02:00">
          <PlayerItem playerName="John Doe" timerText="01:55" cardValue="5" />
          <Separator className="my-2" />
          <PlayerItem playerName="Jane Smith" timerText="01:58" cardValue="8" />
          <Separator className="my-2" />
          <PlayerItem playerName="Bob Johnson" timerText="02:00" cardValue="13" />
          <Separator className="my-2" />
          <PlayerItem playerName="Alice Williams" timerText="02:00" cardValue="21" />
          <Separator className="my-2" />
          <PlayerItem playerName="Charlie Brown" timerText="02:00" cardValue="?" />
          <Separator className="my-2" />
          <PlayerItem playerName="Diana Prince" timerText="02:00" cardValue="∞" />
        </PlayersContainer>
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

export const SomeThinkingSomeVoted: Story = {
  render: () => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting In Progress"
        headerVariant="green"
      >
        <PlayersContainer timerText="01:45">
          <PlayerItem playerName="John Doe" timerText="01:40" cardValue="3" />
          <Separator className="my-2" />
          <PlayerItem playerName="Jane Smith" timerText="01:42" isThinking />
          <Separator className="my-2" />
          <PlayerItem playerName="Bob Johnson" timerText="01:43" cardValue="89" />
          <Separator className="my-2" />
          <PlayerItem playerName="Alice Williams" timerText="01:44" isThinking />
          <Separator className="my-2" />
          <PlayerItem playerName="Charlie Brown" timerText="01:45" cardValue="13" />
        </PlayersContainer>
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

export const NoVotesYet: Story = {
  render: () => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting In Progress"
        headerVariant="green"
      >
        <PlayersContainer timerText="00:30">
          <PlayerItem playerName="John Doe" timerText="00:25" isThinking />
          <Separator className="my-2" />
          <PlayerItem playerName="Jane Smith" timerText="00:28" isThinking />
          <Separator className="my-2" />
          <PlayerItem playerName="Bob Johnson" timerText="00:30" isThinking />
        </PlayersContainer>
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

export const AllCardValues: Story = {
  render: () => {
    const cardValues = ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "∞"] as const;
    
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting Completed"
        headerVariant="yellow"
      >
        <PlayersContainer timerText="02:00">
          {cardValues.map((value, index) => (
            <React.Fragment key={value}>
              <PlayerItem
                playerName={`Player ${index + 1}`}
                timerText={`01:${String(55 - index).padStart(2, "0")}`}
                cardValue={value}
              />
              {index < cardValues.length - 1 && <Separator className="my-2" />}
            </React.Fragment>
          ))}
        </PlayersContainer>
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

