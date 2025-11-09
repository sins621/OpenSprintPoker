import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export type PlayerItemProps = {
  playerName: string;
  timerText: string;
  className?: string;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

export function PlayerItem({
  playerName,
  timerText,
  className,
}: PlayerItemProps) {
  const initials = getInitials(playerName);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Avatar>
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{playerName}</span>
        <span className="text-xs text-muted-foreground">{timerText}</span>
      </div>
    </div>
  );
}

