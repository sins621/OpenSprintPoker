import type { Meta, StoryObj } from '@storybook/react-vite'

import { CreateRoomFormFooter } from './create-room-form-footer'

const meta = {
  title: 'Components/Forms/CreateRoomForm/Footer',
  component: CreateRoomFormFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onCancel: () => {
      console.log('onCancel called')
    },
  },
} satisfies Meta<typeof CreateRoomFormFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

