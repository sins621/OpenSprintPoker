import { Separator } from '@/components/ui/separator'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { StoriesTabbedContainer } from './core/stories-tabbed-container'
import { StoriesTabbedContainerCard } from './core/stories-tabbed-container-card'
import { StoriesTabbedContainerContent } from './core/stories-tabbed-container-content'
import { StoriesTabbedContainerHeader } from './core/stories-tabbed-container-header'
import { StoriesTabbedContainerList } from './core/stories-tabbed-container-list'
import { StoriesTabbedContainerTrigger } from './core/stories-tabbed-container-trigger'
import { StoriesTabbedContainerItem } from './list/stories-tabbed-container-item'
import { StoriesTabbedContainerTable } from './table/stories-tabbed-container-table'
import { StoriesTabbedContainerTableItem } from './table/stories-tabbed-container-table-item'
import { StoriesTabbedContainerUnified } from './unified/stories-tabbed-container-unified'
import { StoriesTabbedContainerUnifiedItem } from './unified/stories-tabbed-container-unified-item'

const meta = {
  title: 'Components/Stories/StoriesTabbedContainer',
  component: StoriesTabbedContainer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StoriesTabbedContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  render: () => (
    <StoriesTabbedContainer defaultValue="active">
      <StoriesTabbedContainerList>
        <StoriesTabbedContainerTrigger value="active" count={5}>
          Active Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="completed" count={12}>
          Completed Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="all" count={17}>
          All Stories
        </StoriesTabbedContainerTrigger>
      </StoriesTabbedContainerList>

      <StoriesTabbedContainerContent value="active">
        <StoriesTabbedContainerCard>
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
            <Separator />
            <StoriesTabbedContainerItem
              name="Email Notification System"
              onClick={() => console.log('Item 4 clicked')}
              onDelete={() => console.log('Item 4 deleted')}
            />
            <Separator />
            <StoriesTabbedContainerItem
              name="User Profile Management"
              onClick={() => console.log('Item 5 clicked')}
              onDelete={() => console.log('Item 5 deleted')}
            />
          </div>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="completed">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">
            This is where your completed stories table or list would go.
          </p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="all">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">
            This is where all your stories table or list would go.
          </p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>
    </StoriesTabbedContainer>
  ),
} satisfies Story

export const WithoutBadges = {
  render: () => (
    <StoriesTabbedContainer defaultValue="active">
      <StoriesTabbedContainerList>
        <StoriesTabbedContainerTrigger value="active">
          Active Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="completed">
          Completed Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="all">
          All Stories
        </StoriesTabbedContainerTrigger>
      </StoriesTabbedContainerList>

      <StoriesTabbedContainerContent value="active">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">Content for active stories.</p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="completed">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">Content for completed stories.</p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="all">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">Content for all stories.</p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>
    </StoriesTabbedContainer>
  ),
} satisfies Story

export const WithZeroCounts = {
  render: () => (
    <StoriesTabbedContainer defaultValue="active">
      <StoriesTabbedContainerList>
        <StoriesTabbedContainerTrigger value="active" count={0}>
          Active Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="completed" count={0}>
          Completed Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="all" count={0}>
          All Stories
        </StoriesTabbedContainerTrigger>
      </StoriesTabbedContainerList>

      <StoriesTabbedContainerContent value="active">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">No active stories available.</p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="completed">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">No completed stories available.</p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="all">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">No stories available.</p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>
    </StoriesTabbedContainer>
  ),
} satisfies Story

export const WithHeaderButtons = {
  render: () => (
    <StoriesTabbedContainer defaultValue="active">
      <StoriesTabbedContainerHeader
        onNewClick={() => console.log('New clicked')}
        onSettingsClick={() => console.log('Settings clicked')}
      >
        <StoriesTabbedContainerTrigger value="active" count={5}>
          Active Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="completed" count={12}>
          Completed Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="all" count={17}>
          All Stories
        </StoriesTabbedContainerTrigger>
      </StoriesTabbedContainerHeader>

      <StoriesTabbedContainerContent value="active">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">No active stories available.</p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="completed">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">No completed stories available.</p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="all">
        <StoriesTabbedContainerCard>
          <p className="text-muted-foreground">No stories available.</p>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>
    </StoriesTabbedContainer>
  ),
} satisfies Story

export const WithTable = {
  render: () => (
    <StoriesTabbedContainer defaultValue="active">
      <StoriesTabbedContainerList>
        <StoriesTabbedContainerTrigger value="active" count={5}>
          Active Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="completed" count={12}>
          Completed Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="all" count={17}>
          All Stories
        </StoriesTabbedContainerTrigger>
      </StoriesTabbedContainerList>

      <StoriesTabbedContainerContent value="active">
        <StoriesTabbedContainerCard>
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
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="completed">
        <StoriesTabbedContainerCard>
          <StoriesTabbedContainerTable>
            <StoriesTabbedContainerTableItem
              title="Completed Story 1"
              estimated={5}
              time="2h 30m"
              onClick={() => console.log('Completed item 1 clicked')}
              onDelete={() => console.log('Completed item 1 deleted')}
            />
            <StoriesTabbedContainerTableItem
              title="Completed Story 2"
              estimated={8}
              time="4h 15m"
              onClick={() => console.log('Completed item 2 clicked')}
              onDelete={() => console.log('Completed item 2 deleted')}
            />
          </StoriesTabbedContainerTable>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="all">
        <StoriesTabbedContainerCard>
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
              title="Completed Story 1"
              estimated={5}
              time="2h 30m"
              onClick={() => console.log('Completed item 1 clicked')}
              onDelete={() => console.log('Completed item 1 deleted')}
            />
          </StoriesTabbedContainerTable>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>
    </StoriesTabbedContainer>
  ),
} satisfies Story

export const Complete = {
  render: () => (
    <StoriesTabbedContainer defaultValue="active">
      <StoriesTabbedContainerHeader
        onNewClick={() => console.log('New clicked')}
        onSettingsClick={() => console.log('Settings clicked')}
      >
        <StoriesTabbedContainerTrigger value="active" count={5}>
          Active Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="completed" count={3}>
          Completed Stories
        </StoriesTabbedContainerTrigger>
        <StoriesTabbedContainerTrigger value="all" count={8}>
          All Stories
        </StoriesTabbedContainerTrigger>
      </StoriesTabbedContainerHeader>

      <StoriesTabbedContainerContent value="active">
        <StoriesTabbedContainerCard>
          <div className="flex flex-col">
            <StoriesTabbedContainerItem
              name="User Authentication Story"
              onClick={() => console.log('Active item 1 clicked')}
              onDelete={() => console.log('Active item 1 deleted')}
            />
            <Separator />
            <StoriesTabbedContainerItem
              name="Payment Integration Story"
              onClick={() => console.log('Active item 2 clicked')}
              onDelete={() => console.log('Active item 2 deleted')}
            />
            <Separator />
            <StoriesTabbedContainerItem
              name="Dashboard Analytics Story"
              onClick={() => console.log('Active item 3 clicked')}
              onDelete={() => console.log('Active item 3 deleted')}
            />
            <Separator />
            <StoriesTabbedContainerItem
              name="Email Notification System"
              onClick={() => console.log('Active item 4 clicked')}
              onDelete={() => console.log('Active item 4 deleted')}
            />
            <Separator />
            <StoriesTabbedContainerItem
              name="User Profile Management"
              onClick={() => console.log('Active item 5 clicked')}
              onDelete={() => console.log('Active item 5 deleted')}
            />
          </div>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="completed">
        <StoriesTabbedContainerCard>
          <StoriesTabbedContainerTable>
            <StoriesTabbedContainerTableItem
              title="API Documentation"
              estimated={8}
              time="4h 15m"
              onClick={() => console.log('Completed item 1 clicked')}
              onDelete={() => console.log('Completed item 1 deleted')}
            />
            <StoriesTabbedContainerTableItem
              title="Database Migration"
              estimated={13}
              time="6h 30m"
              onClick={() => console.log('Completed item 2 clicked')}
              onDelete={() => console.log('Completed item 2 deleted')}
            />
            <StoriesTabbedContainerTableItem
              title="Performance Optimization"
              estimated={5}
              time="2h 45m"
              onClick={() => console.log('Completed item 3 clicked')}
              onDelete={() => console.log('Completed item 3 deleted')}
            />
          </StoriesTabbedContainerTable>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="all">
        <StoriesTabbedContainerCard>
          <StoriesTabbedContainerUnified>
            <StoriesTabbedContainerUnifiedItem
              variant="list"
              title="User Authentication Story"
              onClick={() => console.log('All - Active item 1 clicked')}
              onDelete={() => console.log('All - Active item 1 deleted')}
            />
            <StoriesTabbedContainerUnifiedItem
              variant="list"
              title="Payment Integration Story"
              onClick={() => console.log('All - Active item 2 clicked')}
              onDelete={() => console.log('All - Active item 2 deleted')}
            />
            <StoriesTabbedContainerUnifiedItem
              variant="list"
              title="Dashboard Analytics Story"
              onClick={() => console.log('All - Active item 3 clicked')}
              onDelete={() => console.log('All - Active item 3 deleted')}
            />
            <StoriesTabbedContainerUnifiedItem
              variant="list"
              title="Email Notification System"
              onClick={() => console.log('All - Active item 4 clicked')}
              onDelete={() => console.log('All - Active item 4 deleted')}
            />
            <StoriesTabbedContainerUnifiedItem
              variant="list"
              title="User Profile Management"
              onClick={() => console.log('All - Active item 5 clicked')}
              onDelete={() => console.log('All - Active item 5 deleted')}
            />
            <StoriesTabbedContainerUnifiedItem
              variant="table"
              title="API Documentation"
              estimated={8}
              time="4h 15m"
              onClick={() => console.log('All - Completed item 1 clicked')}
              onDelete={() => console.log('All - Completed item 1 deleted')}
            />
            <StoriesTabbedContainerUnifiedItem
              variant="table"
              title="Database Migration"
              estimated={13}
              time="6h 30m"
              onClick={() => console.log('All - Completed item 2 clicked')}
              onDelete={() => console.log('All - Completed item 2 deleted')}
            />
            <StoriesTabbedContainerUnifiedItem
              variant="table"
              title="Performance Optimization"
              estimated={5}
              time="2h 45m"
              onClick={() => console.log('All - Completed item 3 clicked')}
              onDelete={() => console.log('All - Completed item 3 deleted')}
            />
          </StoriesTabbedContainerUnified>
        </StoriesTabbedContainerCard>
      </StoriesTabbedContainerContent>
    </StoriesTabbedContainer>
  ),
} satisfies Story
