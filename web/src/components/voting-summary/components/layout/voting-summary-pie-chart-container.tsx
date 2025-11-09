import { cn } from "@/lib/utils";

export type VotingSummaryChartContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export function VotingSummaryChartContainer({
  children,
  className,
}: VotingSummaryChartContainerProps) {
  return (
    <div className={cn("flex gap-4 h-full", className)}>
      {children}
    </div>
  );
}

export const VotingSummaryPieChartContainer = VotingSummaryChartContainer;

