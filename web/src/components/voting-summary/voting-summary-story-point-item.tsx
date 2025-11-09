import type { PokerCardValue } from "@/lib/types";

export type VotingSummaryStoryPointItemProps = {
  storyPoint: PokerCardValue;
  color: string;
  percentage: number;
  voteCount: number;
};

export function VotingSummaryStoryPointItem({
  storyPoint,
  color,
  percentage,
  voteCount,
}: VotingSummaryStoryPointItemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-2">
        <div
          className="size-3 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm font-medium">{storyPoint}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>{percentage}%</span>
        <span>{voteCount} vote{voteCount !== 1 ? 's' : ''}</span>
      </div>
    </div>
  );
}

