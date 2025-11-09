import { cn } from "@/lib/utils";

export type VotingSummaryPieChartContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export function VotingSummaryPieChartContainer({
  children,
  className,
}: VotingSummaryPieChartContainerProps) {
  return (
    <div className={cn("flex gap-4 h-full", className)}>
      {children}
    </div>
  );
}

