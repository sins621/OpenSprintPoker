import { useFormContext } from 'react-hook-form'
import { Field, FieldLabel, FieldContent, FieldError } from '@/components/ui/field'
import { FormField, FormItem, FormControl, useFormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export type CreateStoryFormInputProps = {
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

export function CreateStoryFormInput({
  className,
}: CreateStoryFormInputProps) {
  const form = useFormContext()

  return (
    <FormField
      control={form.control}
      name="storyName"
      render={({ field, fieldState }) => (
        <FormItem>
          <Field
            className={className}
            data-invalid={fieldState.invalid ? true : undefined}
          >
            <FieldLabelWithFormId>Story Name</FieldLabelWithFormId>
            <FieldContent>
              <FormControl>
                <Input
                  placeholder="Enter story name"
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

