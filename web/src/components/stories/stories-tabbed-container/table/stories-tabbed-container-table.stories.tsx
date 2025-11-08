import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { StoriesTabbedContainerTable } from './stories-tabbed-container-table'
import { StoriesTabbedContainerTableItem } from './stories-tabbed-container-table-item'

const meta = {
  title: 'Components/Stories/StoriesTabbedContainerTable',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        estimated={5}
        time="2h 30m"
        onClick={() => console.log('Item 1 clicked')}
        onDelete={() => console.log('Item 1 deleted')}
      />
      <StoriesTabbedContainerTableItem
        title="Payment Integration Story"
        estimated={8}
        time="4h 15m"
        onClick={() => console.log('Item 2 clicked')}
        onDelete={() => console.log('Item 2 deleted')}
      />
      <StoriesTabbedContainerTableItem
        title="Dashboard Analytics Story"
        estimated={3}
        time="1h 45m"
        onClick={() => console.log('Item 3 clicked')}
        onDelete={() => console.log('Item 3 deleted')}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story

export const WithManyItems = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        estimated={5}
        time="2h 30m"
        onClick={() => console.log('Item 1 clicked')}
        onDelete={() => console.log('Item 1 deleted')}
      />
      <StoriesTabbedContainerTableItem
        title="Payment Integration Story"
        estimated={8}
        time="4h 15m"
        onClick={() => console.log('Item 2 clicked')}
        onDelete={() => console.log('Item 2 deleted')}
      />
      <StoriesTabbedContainerTableItem
        title="Dashboard Analytics Story"
        estimated={3}
        time="1h 45m"
        onClick={() => console.log('Item 3 clicked')}
        onDelete={() => console.log('Item 3 deleted')}
      />
      <StoriesTabbedContainerTableItem
        title="Email Notification System"
        estimated={13}
        time="6h 20m"
        onClick={() => console.log('Item 4 clicked')}
        onDelete={() => console.log('Item 4 deleted')}
      />
      <StoriesTabbedContainerTableItem
        title="User Profile Management"
        estimated={2}
        time="1h 10m"
        onClick={() => console.log('Item 5 clicked')}
        onDelete={() => console.log('Item 5 deleted')}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story

export const WithoutTime = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        estimated={5}
        onClick={() => console.log('Item 1 clicked')}
        onDelete={() => console.log('Item 1 deleted')}
      />
      <StoriesTabbedContainerTableItem
        title="Payment Integration Story"
        estimated={8}
        onClick={() => console.log('Item 2 clicked')}
        onDelete={() => console.log('Item 2 deleted')}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story

export const WithoutEstimated = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        time="2h 30m"
        onClick={() => console.log('Item 1 clicked')}
        onDelete={() => console.log('Item 1 deleted')}
      />
      <StoriesTabbedContainerTableItem
        title="Payment Integration Story"
        time="4h 15m"
        onClick={() => console.log('Item 2 clicked')}
        onDelete={() => console.log('Item 2 deleted')}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story

export const WithoutDelete = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        estimated={5}
        time="2h 30m"
        onClick={() => console.log('Item 1 clicked')}
      />
      <StoriesTabbedContainerTableItem
        title="Payment Integration Story"
        estimated={8}
        time="4h 15m"
        onClick={() => console.log('Item 2 clicked')}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story

