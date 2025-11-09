import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PokerCardValues } from "@/lib/constants";

export type ModeratorStateProps = {
  onFinishVoting?: (value: string) => void;
  onResetTimer?: () => void;
  onClearVotes?: () => void;
  onSkipStory?: () => void;
};

export function ModeratorState({
  onFinishVoting,
  onResetTimer,
  onClearVotes,
  onSkipStory,
}: ModeratorStateProps) {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleFinishVoting = () => {
    if (selectedValue && onFinishVoting) {
      onFinishVoting(selectedValue);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Select value={selectedValue} onValueChange={setSelectedValue}>
          <SelectTrigger className="flex-1">
            <SelectValue placeholder="Select point value" />
          </SelectTrigger>
          <SelectContent>
            {PokerCardValues.map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          type="button"
          variant="outline"
          onClick={handleFinishVoting}
          className="flex-1"
        >
          Finish Voting
        </Button>
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={onResetTimer}
        className="w-full"
      >
        Reset Timer
      </Button>
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={onClearVotes}
          className="flex-1"
        >
          Clear Votes
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onSkipStory}
          className="flex-1"
        >
          Skip Story
        </Button>
      </div>
    </div>
  );
}

