import { Timer } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export type PlayersContainerProps = {
  timerText: string;
  children?: React.ReactNode;
  className?: string;
};

export function PlayersContainer({
  timerText,
  children,
  className,
}: PlayersContainerProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Players:</span>
        <div className="flex items-center gap-2">
          <Timer className="size-4" />
          <span className="text-sm">{timerText}</span>
        </div>
      </div>
      <Separator className="mt-4 mb-2" />
      {children}
    </div>
  );
}

