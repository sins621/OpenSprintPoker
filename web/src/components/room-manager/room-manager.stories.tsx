import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { RoomManagerContainer } from "./container/room-manager-container";
import { GameManager } from "./game/game-manager";
import { PlayersContainer } from "./players/players-container";
import { PlayerItem } from "./players/player-item";
import { SkipStoryModal } from "./modal/skip-story-modal";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Components/RoomManager",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  render: () => {
    const [skipModalOpen, setSkipModalOpen] = React.useState(false);

    return (
      <>
        <RoomManagerContainer
          url="https://example.com/room/abc123"
          headerText="Voting In Progress"
          headerVariant="green"
        >
          <div className="flex flex-col gap-6">
            <GameManager
              state="playing"
              onResetTimer={() => {
                console.log("onResetTimer called");
              }}
              onFlipCards={() => {
                console.log("onFlipCards called");
              }}
              onClearVotes={() => {
                console.log("onClearVotes called");
              }}
              onSkipStory={() => {
                console.log("onSkipStory called");
                setSkipModalOpen(true);
              }}
            />
            <PlayersContainer timerText="01:30">
              <PlayerItem playerName="John Doe" timerText="01:25" />
              <Separator className="my-2" />
              <PlayerItem playerName="Jane Smith" timerText="01:28" />
              <Separator className="my-2" />
              <PlayerItem playerName="Bob Johnson" timerText="01:30" />
            </PlayersContainer>
          </div>
        </RoomManagerContainer>
        <SkipStoryModal
          open={skipModalOpen}
          onOpenChange={setSkipModalOpen}
          onSkip={() => {
            console.log("onSkip called");
          }}
          onCancel={() => {
            console.log("onCancel called");
          }}
        />
      </>
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

export const CompleteIdle: Story = {
  render: () => {
    return (
      <RoomManagerContainer
        url="https://example.com/room/abc123"
        headerText="Voting Completed"
        headerVariant="yellow"
      >
        <div className="flex flex-col gap-6">
          <GameManager
            state="idle"
            onClearVotes={() => {
              console.log("onClearVotes called");
            }}
            onNextStory={() => {
              console.log("onNextStory called");
            }}
          />
          <PlayersContainer timerText="02:00">
            <PlayerItem playerName="John Doe" timerText="01:55" />
            <Separator className="my-2" />
            <PlayerItem playerName="Jane Smith" timerText="01:58" />
            <Separator className="my-2" />
            <PlayerItem playerName="Bob Johnson" timerText="02:00" />
            <Separator className="my-2" />
            <PlayerItem playerName="Alice Williams" timerText="02:00" />
          </PlayersContainer>
        </div>
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

