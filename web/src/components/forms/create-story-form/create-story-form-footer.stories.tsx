import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { CreateStoryFormFooter } from './create-story-form-footer'

const schema = z.object({
  storyName: z.string().min(1, 'Story name is required'),
})

const meta = {
  title: 'Components/Forms/CreateStoryForm/Footer',
  component: CreateStoryFormFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onSubmit: (data: any, keepOpen: boolean) => {
      console.log('onSubmit called with:', data, 'keepOpen:', keepOpen)
    },
    onCancel: () => {
      console.log('onCancel called')
    },
  },
  decorators: [
    (Story) => {
      const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          storyName: '',
        },
      })

      return (
        <FormProvider {...form}>
          <div className="w-96">
            <Story />
          </div>
        </FormProvider>
      )
    },
  ],
} satisfies Meta<typeof CreateStoryFormFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithValue: Story = {
  args: {},
  decorators: [
    (Story) => {
      const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          storyName: 'My Story',
        },
      })

      return (
        <FormProvider {...form}>
          <div className="w-96">
            <Story />
          </div>
        </FormProvider>
      )
    },
  ],
}

