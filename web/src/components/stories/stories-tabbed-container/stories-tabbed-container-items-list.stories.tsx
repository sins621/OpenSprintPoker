import type { Meta, StoryObj } from '@storybook/react-vite'
import { StoriesTabbedContainerItem } from './stories-tabbed-container-item'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Components/Stories/StoriesTabbedContainerItemsList',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => (
    <div className="flex flex-col">
      <StoriesTabbedContainerItem
        name="User Authentication Story"
        onClick={() => console.log('Item 1 clicked')}
        onDelete={() => console.log('Item 1 deleted')}
      />
      <Separator />
      <StoriesTabbedContainerItem
        name="Payment Integration Story"
        onClick={() => console.log('Item 2 clicked')}
        onDelete={() => console.log('Item 2 deleted')}
      />
      <Separator />
      <StoriesTabbedContainerItem
        name="Dashboard Analytics Story"
        onClick={() => console.log('Item 3 clicked')}
        onDelete={() => console.log('Item 3 deleted')}
      />
    </div>
  ),
} satisfies Story

export const SingleItem = {
  render: () => (
    <div className="flex flex-col">
      <StoriesTabbedContainerItem
        name="Single Story Item"
        onClick={() => console.log('Item clicked')}
        onDelete={() => console.log('Item deleted')}
      />
    </div>
  ),
} satisfies Story

export const ManyItems = {
  render: () => (
    <div className="flex flex-col">
      <StoriesTabbedContainerItem
        name="Story 1"
        onClick={() => console.log('Item 1 clicked')}
        onDelete={() => console.log('Item 1 deleted')}
      />
      <Separator />
      <StoriesTabbedContainerItem
        name="Story 2"
        onClick={() => console.log('Item 2 clicked')}
        onDelete={() => console.log('Item 2 deleted')}
      />
      <Separator />
      <StoriesTabbedContainerItem
        name="Story 3"
        onClick={() => console.log('Item 3 clicked')}
        onDelete={() => console.log('Item 3 deleted')}
      />
      <Separator />
      <StoriesTabbedContainerItem
        name="Story 4"
        onClick={() => console.log('Item 4 clicked')}
        onDelete={() => console.log('Item 4 deleted')}
      />
      <Separator />
      <StoriesTabbedContainerItem
        name="Story 5"
        onClick={() => console.log('Item 5 clicked')}
        onDelete={() => console.log('Item 5 deleted')}
      />
    </div>
  ),
} satisfies Story

export const InCard = {
  render: () => (
    <div className="w-full max-w-md">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Active Stories</h3>
          <div className="flex flex-col">
            <StoriesTabbedContainerItem
              name="User Authentication Story"
              onClick={() => console.log('Item 1 clicked')}
              onDelete={() => console.log('Item 1 deleted')}
            />
            <Separator />
            <StoriesTabbedContainerItem
              name="Payment Integration Story"
              onClick={() => console.log('Item 2 clicked')}
              onDelete={() => console.log('Item 2 deleted')}
            />
            <Separator />
            <StoriesTabbedContainerItem
              name="Dashboard Analytics Story"
              onClick={() => console.log('Item 3 clicked')}
              onDelete={() => console.log('Item 3 deleted')}
            />
          </div>
        </div>
      </div>
    </div>
  ),
} satisfies Story

