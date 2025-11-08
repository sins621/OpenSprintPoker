import type { Meta, StoryObj } from '@storybook/react-vite'
import { StoriesTabbedContainerUnified } from './stories-tabbed-container-unified'
import { StoriesTabbedContainerUnifiedItem } from './stories-tabbed-container-unified-item'

const meta = {
  title: 'Components/Stories/StoriesTabbedContainerUnified',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => (
    <StoriesTabbedContainerUnified>
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="User Authentication Story"
        onClick={() => console.log('Item 1 clicked')}
        onDelete={() => console.log('Item 1 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="table"
        title="Payment Integration Story"
        estimated={8}
        time="4h 15m"
        onClick={() => console.log('Item 2 clicked')}
        onDelete={() => console.log('Item 2 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="Dashboard Analytics Story"
        onClick={() => console.log('Item 3 clicked')}
        onDelete={() => console.log('Item 3 deleted')}
      />
    </StoriesTabbedContainerUnified>
  ),
} satisfies Story

export const MixedListAndTable = {
  render: () => (
    <StoriesTabbedContainerUnified>
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="User Authentication Story"
        onClick={() => console.log('List item 1 clicked')}
        onDelete={() => console.log('List item 1 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="Payment Integration Story"
        onClick={() => console.log('List item 2 clicked')}
        onDelete={() => console.log('List item 2 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="Dashboard Analytics Story"
        onClick={() => console.log('List item 3 clicked')}
        onDelete={() => console.log('List item 3 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="Email Notification System"
        onClick={() => console.log('List item 4 clicked')}
        onDelete={() => console.log('List item 4 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="User Profile Management"
        onClick={() => console.log('List item 5 clicked')}
        onDelete={() => console.log('List item 5 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="table"
        title="API Documentation"
        estimated={8}
        time="4h 15m"
        onClick={() => console.log('Table item 1 clicked')}
        onDelete={() => console.log('Table item 1 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="table"
        title="Database Migration"
        estimated={13}
        time="6h 30m"
        onClick={() => console.log('Table item 2 clicked')}
        onDelete={() => console.log('Table item 2 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="table"
        title="Performance Optimization"
        estimated={5}
        time="2h 45m"
        onClick={() => console.log('Table item 3 clicked')}
        onDelete={() => console.log('Table item 3 deleted')}
      />
    </StoriesTabbedContainerUnified>
  ),
} satisfies Story

export const OnlyListItems = {
  render: () => (
    <StoriesTabbedContainerUnified>
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="User Authentication Story"
        onClick={() => console.log('Item 1 clicked')}
        onDelete={() => console.log('Item 1 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="Payment Integration Story"
        onClick={() => console.log('Item 2 clicked')}
        onDelete={() => console.log('Item 2 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="list"
        title="Dashboard Analytics Story"
        onClick={() => console.log('Item 3 clicked')}
        onDelete={() => console.log('Item 3 deleted')}
      />
    </StoriesTabbedContainerUnified>
  ),
} satisfies Story

export const OnlyTableItems = {
  render: () => (
    <StoriesTabbedContainerUnified>
      <StoriesTabbedContainerUnifiedItem
        variant="table"
        title="API Documentation"
        estimated={8}
        time="4h 15m"
        onClick={() => console.log('Item 1 clicked')}
        onDelete={() => console.log('Item 1 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="table"
        title="Database Migration"
        estimated={13}
        time="6h 30m"
        onClick={() => console.log('Item 2 clicked')}
        onDelete={() => console.log('Item 2 deleted')}
      />
      <StoriesTabbedContainerUnifiedItem
        variant="table"
        title="Performance Optimization"
        estimated={5}
        time="2h 45m"
        onClick={() => console.log('Item 3 clicked')}
        onDelete={() => console.log('Item 3 deleted')}
      />
    </StoriesTabbedContainerUnified>
  ),
} satisfies Story

