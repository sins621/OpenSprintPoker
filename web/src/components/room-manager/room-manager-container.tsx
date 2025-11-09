import * as React from "react";
import { Activity } from "react";
import { ChevronDownIcon, Copy } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export type RoomManagerContainerHeaderVariant =
  | "default"
  | "yellow"
  | "blue"
  | "green"
  | "red"
  | "pink"
  | "orange"
  | "purple";

export type RoomManagerContainerProps = {
  url: string;
  headerText: string;
  headerVariant?: RoomManagerContainerHeaderVariant;
  className?: string;
  children?: React.ReactNode;
};

const headerVariantStyles: Record<
  RoomManagerContainerHeaderVariant,
  string
> = {
  default: "",
  yellow: "bg-[var(--open-sprint-poker-yellow)]",
  blue: "bg-[var(--open-sprint-poker-blue)]",
  green: "bg-[var(--open-sprint-poker-green)]",
  red: "bg-[var(--open-sprint-poker-red)]",
  pink: "bg-[var(--open-sprint-poker-pink)]",
  orange: "bg-[var(--open-sprint-poker-orange)]",
  purple: "bg-[var(--open-sprint-poker-purple)]",
};

export function RoomManagerContainer({
  url,
  headerText,
  headerVariant = "default",
  className,
  children,
}: RoomManagerContainerProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  }, [url]);

  const isColoredVariant = headerVariant !== "default";
  const textColorClass = isColoredVariant
    ? "text-white"
    : "text-foreground";

  return (
    <Card className={cn("w-full pt-0", className)}>
      <div
        className={cn(
          "text-center px-6 py-6 rounded-t-xl",
          headerVariantStyles[headerVariant]
        )}
      >
        <div className={cn("text-2xl font-semibold", textColorClass)}>
          {headerText}
        </div>
      </div>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between"
        >
          <span>Invite a teammate</span>
          <ChevronDownIcon
            className={cn(
              "size-4 shrink-0 transition-transform duration-200",
              isExpanded && "rotate-180"
            )}
          />
        </Button>
        <Activity mode={isExpanded ? "visible" : "hidden"}>
          <div className="flex w-full gap-2 animate-in slide-in-from-top-2 duration-200">
            <Input type="text" value={url} readOnly className="flex-1" />
            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={handleCopy}
            >
              <Copy className="size-4" />
              <span>Copy URL</span>
            </Button>
          </div>
        </Activity>
      </CardFooter>
    </Card>
  );
}
