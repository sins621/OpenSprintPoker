import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CreateStoryFormData } from "./create-story-form";

export type CreateStoryFormFooterProps = {
  onSubmit?: (data: CreateStoryFormData, keepOpen: boolean) => void;
  onCancel?: () => void;
  keepOpen: boolean;
  className?: string;
};

export function CreateStoryFormFooter({
  onSubmit,
  onCancel,
  keepOpen,
  className,
}: CreateStoryFormFooterProps) {
  const form = useFormContext<CreateStoryFormData>();

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
      <Button type="button" variant="default" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}
