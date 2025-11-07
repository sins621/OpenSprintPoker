import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { CreateStoryFormData } from "./create-story-form";

export type CreateStoryFormFooterProps = {
  onSubmit?: (data: CreateStoryFormData, keepOpen: boolean) => void;
  onCancel?: () => void;
  className?: string;
};

export function CreateStoryFormFooter({
  onSubmit,
  onCancel,
  className,
}: CreateStoryFormFooterProps) {
  const form = useFormContext<CreateStoryFormData>();
  const [keepOpen, setKeepOpen] = useState(false);

  const handleSave = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      const data = form.getValues();
      onSubmit?.(data, keepOpen);
      if (keepOpen) {
        form.reset();
      }
    }
  };

  return (
    <div className={cn("flex gap-3 justify-between w-full", className)}>
      <Button type="button" variant="outline" onClick={onCancel}>
        Cancel
      </Button>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Button type="button" variant="default" onClick={handleSave}>
            Save
          </Button>
          <Checkbox
            id="keep-open"
            checked={keepOpen}
            onCheckedChange={(checked) => setKeepOpen(checked === true)}
          />
          <Label htmlFor="keep-open" className="cursor-pointer">
            Keep Open
          </Label>
        </div>
      </div>
    </div>
  );
}
