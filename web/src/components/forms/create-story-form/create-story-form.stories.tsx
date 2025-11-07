import type { Meta, StoryObj } from '@storybook/react-vite'

import { CreateStoryForm } from './create-story-form'

const meta = {
  title: 'Components/Forms/CreateStoryForm',
  component: CreateStoryForm,
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
      return (
        <div className="w-112">
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof CreateStoryForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

