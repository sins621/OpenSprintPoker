import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type SkipStoryModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSkip?: () => void;
  onCancel?: () => void;
};

export function SkipStoryModal({
  open,
  onOpenChange,
  onSkip,
  onCancel,
}: SkipStoryModalProps) {
  const handleSkip = React.useCallback(() => {
    onSkip?.();
    onOpenChange(false);
  }, [onSkip, onOpenChange]);

  const handleCancel = React.useCallback(() => {
    onCancel?.();
    onOpenChange(false);
  }, [onCancel, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className={cn("w-auto max-w-fit")}
      >
        <div className="flex flex-col gap-4 text-center">
          <DialogTitle>Confirm cancelling the current story?</DialogTitle>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="default"
            onClick={handleSkip}
            className="flex-1"
          >
            Skip
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

