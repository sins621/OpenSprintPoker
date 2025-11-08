import type { Meta, StoryObj } from '@storybook/react-vite'
import { StoriesTabbedContainerItem } from './stories-tabbed-container-item'

const meta = {
  title: 'Components/Stories/StoriesTabbedContainerItem',
  component: StoriesTabbedContainerItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    name: 'Story Item',
    onDelete: () => console.log('Delete clicked'),
    onClick: () => console.log('Item clicked'),
  },
} satisfies Meta<typeof StoriesTabbedContainerItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    name: 'User Authentication Story',
  },
} satisfies Story

export const LongName = {
  args: {
    name: 'This is a very long story name that might wrap to multiple lines',
  },
} satisfies Story

export const WithoutDelete = {
  args: {
    name: 'Story without delete handler',
    onDelete: undefined,
  },
} satisfies Story

export const WithoutClick = {
  args: {
    name: 'Story without click handler',
    onClick: undefined,
  },
} satisfies Story

