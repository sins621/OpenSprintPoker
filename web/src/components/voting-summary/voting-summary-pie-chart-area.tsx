import { cn } from "@/lib/utils";

export type VotingSummaryPieChartAreaProps = {
  children?: React.ReactNode;
  className?: string;
};

export function VotingSummaryPieChartArea({
  children,
  className,
}: VotingSummaryPieChartAreaProps) {
  return (
    <div className={cn("flex-2 relative min-w-0", className)}>
      {children}
    </div>
  );
}

