import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { PokerCardValue } from "@/lib/types";

export type PlayerItemProps = {
  playerName: string;
  timerText: string;
  cardValue?: PokerCardValue;
  isThinking?: boolean;
  className?: string;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

function ThinkingDots() {
  return (
    <div className="flex items-center gap-1">
      <span
        className="size-1.5 rounded-full bg-current opacity-60"
        style={{
          animation: 'thinking 1.4s ease-in-out infinite',
          animationDelay: '0ms',
        }}
      />
      <span
        className="size-1.5 rounded-full bg-current opacity-60"
        style={{
          animation: 'thinking 1.4s ease-in-out infinite',
          animationDelay: '200ms',
        }}
      />
      <span
        className="size-1.5 rounded-full bg-current opacity-60"
        style={{
          animation: 'thinking 1.4s ease-in-out infinite',
          animationDelay: '400ms',
        }}
      />
      <style>{`
        @keyframes thinking {
          0%, 60%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          30% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}

export function PlayerItem({
  playerName,
  timerText,
  cardValue,
  isThinking,
  className,
}: PlayerItemProps) {
  const initials = getInitials(playerName);

  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{playerName}</span>
          <span className="text-xs text-muted-foreground">{timerText}</span>
        </div>
      </div>
      {isThinking ? (
        <ThinkingDots />
      ) : cardValue !== undefined ? (
        <span className="text-sm font-medium">{cardValue}</span>
      ) : null}
    </div>
  );
}

