import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { CreateRoomFormInput } from './create-room-form-input'

const schema = z.object({
  roomName: z.string().min(1, 'Room name is required'),
})

const meta = {
  title: 'Components/Forms/CreateRoomForm/Input',
  component: CreateRoomFormInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          roomName: '',
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
} satisfies Meta<typeof CreateRoomFormInput>

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
          roomName: 'My Room',
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
          roomName: '',
        },
      })

      React.useEffect(() => {
        form.trigger('roomName')
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

