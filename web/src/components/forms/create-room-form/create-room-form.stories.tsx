import type { Meta, StoryObj } from '@storybook/react-vite'

import { CreateRoomForm } from './create-room-form'

const meta = {
  title: 'Components/Forms/CreateRoomForm',
  component: CreateRoomForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onSubmit: (data: any) => {
      console.log('onSubmit called with:', data)
    },
    onCancel: () => {
      console.log('onCancel called')
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-96">
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof CreateRoomForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
