import { cn } from "@/lib/utils";

export type VotingSummaryChartAreaProps = {
  children?: React.ReactNode;
  className?: string;
};

export function VotingSummaryChartArea({
  children,
  className,
}: VotingSummaryChartAreaProps) {
  return (
    <div className={cn("flex-2 relative min-w-0", className)}>
      {children}
    </div>
  );
}

export const VotingSummaryPieChartArea = VotingSummaryChartArea;

