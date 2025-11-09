import { Button } from "@/components/ui/button";

export type IdleStateProps = {
  onClearVotes?: () => void;
  onNextStory?: () => void;
};

export function IdleState({ onClearVotes, onNextStory }: IdleStateProps) {
  return (
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
  );
}

