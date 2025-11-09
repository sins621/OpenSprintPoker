import { Button } from "@/components/ui/button";

export type PlayingStateProps = {
  onResetTimer?: () => void;
  onFlipCards?: () => void;
  onClearVotes?: () => void;
  onSkipStory?: () => void;
};

export function PlayingState({
  onResetTimer,
  onFlipCards,
  onClearVotes,
  onSkipStory,
}: PlayingStateProps) {
  return (
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
  );
}

