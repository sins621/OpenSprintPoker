import { Activity } from "react";
import { Button } from "@/components/ui/button";

export type GameManagerState = "playing" | "idle";

export type GameManagerProps = {
  state: GameManagerState;
  onResetTimer?: () => void;
  onFlipCards?: () => void;
  onClearVotes?: () => void;
  onSkipStory?: () => void;
  onNextStory?: () => void;
  className?: string;
};

export function GameManager({
  state,
  onResetTimer,
  onFlipCards,
  onClearVotes,
  onSkipStory,
  onNextStory,
  className,
}: GameManagerProps) {
  return (
    <div className={className}>
      <Activity mode={state === "playing" ? "visible" : "hidden"}>
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={onResetTimer}
            className="w-full"
          >
            Reset Timer
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onFlipCards}
            className="w-full"
          >
            Flip Cards
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onClearVotes}
            className="w-full"
          >
            Clear Votes
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onSkipStory}
            className="w-full"
          >
            Skip Story
          </Button>
        </div>
      </Activity>
      <Activity mode={state === "idle" ? "visible" : "hidden"}>
        <div className="flex flex-col gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={onClearVotes}
            className="w-full"
          >
            Clear Votes
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onNextStory}
            className="w-full"
          >
            Next Story
          </Button>
        </div>
      </Activity>
    </div>
  );
}

