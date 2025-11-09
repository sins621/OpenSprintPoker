import { Activity } from "react";
import { PlayingState } from "./playing-state";
import { IdleState } from "./idle-state";
import { ModeratorState } from "./moderator-state";

export type GameManagerState = "playing" | "idle" | "moderator";

export type GameManagerProps = {
  state: GameManagerState;
  onResetTimer?: () => void;
  onFlipCards?: () => void;
  onClearVotes?: () => void;
  onSkipStory?: () => void;
  onNextStory?: () => void;
  onFinishVoting?: (value: string) => void;
  className?: string;
};

export function GameManager({
  state,
  onResetTimer,
  onFlipCards,
  onClearVotes,
  onSkipStory,
  onNextStory,
  onFinishVoting,
  className,
}: GameManagerProps) {
  return (
    <div className={className}>
      <Activity mode={state === "playing" ? "visible" : "hidden"}>
        <PlayingState
          onResetTimer={onResetTimer}
          onFlipCards={onFlipCards}
          onClearVotes={onClearVotes}
          onSkipStory={onSkipStory}
        />
      </Activity>
      <Activity mode={state === "idle" ? "visible" : "hidden"}>
        <IdleState onClearVotes={onClearVotes} onNextStory={onNextStory} />
      </Activity>
      <Activity mode={state === "moderator" ? "visible" : "hidden"}>
        <ModeratorState
          onFinishVoting={onFinishVoting}
          onResetTimer={onResetTimer}
          onClearVotes={onClearVotes}
          onSkipStory={onSkipStory}
        />
      </Activity>
    </div>
  );
}

