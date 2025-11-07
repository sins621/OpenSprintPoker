import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { CreateStoryFormInput } from './create-story-form-input'

const schema = z.object({
  storyName: z.string().min(1, 'Story name is required'),
})

const meta = {
  title: 'Components/Forms/CreateStoryForm/Input',
  component: CreateStoryFormInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
} satisfies Meta<typeof CreateStoryFormInput>

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

export const WithError: Story = {
  args: {},
  decorators: [
    (Story) => {
      const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          storyName: '',
        },
      })

      React.useEffect(() => {
        form.trigger('storyName')
      }, [form])

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

