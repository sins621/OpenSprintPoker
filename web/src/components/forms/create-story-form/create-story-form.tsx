import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CreateStoryFormInput } from "./create-story-form-input";
import { CreateStoryFormFooter } from "./create-story-form-footer";

const createStorySchema = z.object({
  storyName: z.string().min(1, "Story name is required"),
});

export type CreateStoryFormData = z.infer<typeof createStorySchema>;

export type CreateStoryFormProps = {
  onSubmit?: (data: CreateStoryFormData, keepOpen: boolean) => void;
  onCancel?: () => void;
  className?: string;
};

export function CreateStoryForm({
  onSubmit,
  onCancel,
  className,
}: CreateStoryFormProps) {
  const form = useForm<CreateStoryFormData>({
    resolver: zodResolver(createStorySchema),
    defaultValues: {
      storyName: "",
    },
  });
  const [keepOpen, setKeepOpen] = useState(false);

  return (
    <FormProvider {...form}>
      <Card className={className}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4"
        >
          <CardHeader>
            <CardTitle className="text-2xl">Create New Story</CardTitle>
            <CardAction className="self-center">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="keep-open"
                  checked={keepOpen}
                  onCheckedChange={(checked) => setKeepOpen(checked === true)}
                />
                <Label htmlFor="keep-open" className="cursor-pointer">
                  Keep Open
                </Label>
              </div>
            </CardAction>
          </CardHeader>
          <CardContent>
            <CreateStoryFormInput />
          </CardContent>
          <CardFooter>
            <CreateStoryFormFooter
              onSubmit={onSubmit}
              onCancel={onCancel}
              keepOpen={keepOpen}
            />
          </CardFooter>
        </form>
      </Card>
    </FormProvider>
  );
}

