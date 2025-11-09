import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export type VotingSummaryItemsAreaProps = {
  children?: React.ReactNode;
  className?: string;
};

export function VotingSummaryItemsArea({
  children,
  className,
}: VotingSummaryItemsAreaProps) {
  return (
    <div className={cn("flex-1 min-w-0", className)}>
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-3 pr-4">
          {children}
        </div>
      </ScrollArea>
    </div>
  );
}

