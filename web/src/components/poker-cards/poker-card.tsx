import { cn } from "@/lib/utils";

export type PokerCardValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "5"
  | "8"
  | "13"
  | "21"
  | "34"
  | "55"
  | "89"
  | "?"
  | "∞";

export type PokerCardProps = {
  value: PokerCardValue;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
};

export function PokerCard({
  value,
  onClick,
  selected = false,
  disabled = false,
  className,
}: PokerCardProps) {
  const isClickable = onClick && !disabled;

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={cn(
        "relative flex items-center justify-center",
        "w-20 h-28 rounded-lg",
        "bg-card text-card-foreground",
        "border-2 transition-all duration-200",
        "shadow-md hover:shadow-lg",
        selected
          ? "border-primary ring-2 ring-primary ring-offset-2 scale-105"
          : "border-border hover:border-primary/50",
        isClickable && "cursor-pointer active:scale-95",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span
        className={cn(
          "text-2xl font-bold",
          "select-none",
          value === "?" || value === "∞" ? "text-3xl" : ""
        )}
      >
        {value}
      </span>
    </div>
  );
}
