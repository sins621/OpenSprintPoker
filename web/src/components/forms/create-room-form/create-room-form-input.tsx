import { useFormContext } from 'react-hook-form'
import { Field, FieldLabel, FieldContent, FieldError } from '@/components/ui/field'
import { FormField, FormItem, FormControl, useFormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export type CreateRoomFormInputProps = {
  className?: string
}

function FieldLabelWithFormId({
  children,
}: {
  children: React.ReactNode
}) {
  const { formItemId } = useFormField()
  return <FieldLabel htmlFor={formItemId}>{children}</FieldLabel>
}

export function CreateRoomFormInput({
  className,
}: CreateRoomFormInputProps) {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name="roomName"
      render={({ field, fieldState }) => (
        <FormItem>
          <Field
            className={className}
            data-invalid={fieldState.invalid ? true : undefined}
          >
            <FieldLabelWithFormId>Room Name</FieldLabelWithFormId>
            <FieldContent>
              <FormControl>
                <Input
                  placeholder="Enter room name"
                  {...field}
                />
              </FormControl>
              <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
            </FieldContent>
          </Field>
        </FormItem>
      )}
    />
  )
}

