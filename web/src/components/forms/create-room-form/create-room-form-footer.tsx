import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CreateRoomFormFooterProps = {
  onCancel?: () => void;
  className?: string;
};

export function CreateRoomFormFooter({
  onCancel,
  className,
}: CreateRoomFormFooterProps) {
  return (
    <div className={cn("flex gap-3 justify-between w-full", className)}>
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" variant="default">
        Create
      </Button>
    </div>
  );
}
