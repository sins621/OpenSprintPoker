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
import { CreateRoomFormInput } from "./create-room-form-input";
import { CreateRoomFormFooter } from "./create-room-form-footer";

const createRoomSchema = z.object({
  roomName: z.string().min(1, "Room name is required"),
});

export type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export type CreateRoomFormProps = {
  onSubmit?: (data: CreateRoomFormData) => void;
  onCancel?: () => void;
  className?: string;
};

export function CreateRoomForm({
  onSubmit,
  onCancel,
  className,
}: CreateRoomFormProps) {
  const form = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      roomName: "",
    },
  });

  const handleSubmit = (data: CreateRoomFormData) => {
    onSubmit?.(data);
  };

  return (
    <FormProvider {...form}>
      <Card className={className}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4"
        >
          <CardHeader>
            <CardTitle className="text-2xl">Create New Room</CardTitle>
          </CardHeader>
          <CardContent>
            <CreateRoomFormInput />
          </CardContent>
          <CardFooter>
            <CreateRoomFormFooter onCancel={onCancel} />
          </CardFooter>
        </form>
      </Card>
    </FormProvider>
  );
}
