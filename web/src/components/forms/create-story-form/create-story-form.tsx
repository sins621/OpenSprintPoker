import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

  return (
    <FormProvider {...form}>
      <Card className={className}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4"
        >
          <CardHeader>
            <CardTitle className="text-2xl">Create New Story</CardTitle>
          </CardHeader>
          <CardContent>
            <CreateStoryFormInput />
          </CardContent>
          <CardFooter>
            <CreateStoryFormFooter
              onSubmit={onSubmit}
              onCancel={onCancel}
            />
          </CardFooter>
        </form>
      </Card>
    </FormProvider>
  );
}

