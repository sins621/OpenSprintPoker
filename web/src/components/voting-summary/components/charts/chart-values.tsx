export type ChartValuesProps = {
  votedCount: number;
  averageStoryPoint: number;
};

export function ChartValues({
  votedCount,
  averageStoryPoint,
}: ChartValuesProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="text-sm text-muted-foreground">
        Voted Count: <span className="font-medium">{votedCount} Player{votedCount !== 1 ? 's' : ''} Voted</span>
      </div>
      <div className="text-lg font-semibold">{averageStoryPoint.toFixed(1)}</div>
    </div>
  );
}

