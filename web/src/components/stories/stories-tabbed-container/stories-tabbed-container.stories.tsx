import type { Meta, StoryObj } from '@storybook/react-vite'
import { StoriesTabbedContainer } from './stories-tabbed-container'
import { StoriesTabbedContainerList } from './stories-tabbed-container-list'
import { StoriesTabbedContainerHeader } from './stories-tabbed-container-header'
import { StoriesTabbedContainerTrigger } from './stories-tabbed-container-trigger'
import { StoriesTabbedContainerContent } from './stories-tabbed-container-content'
import { StoriesTabbedContainerCard } from './stories-tabbed-container-card'
import { StoriesTabbedContainerItem } from './stories-tabbed-container-item'
import { Separator } from '@/components/ui/separator'

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

