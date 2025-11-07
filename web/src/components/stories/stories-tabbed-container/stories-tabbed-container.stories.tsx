import type { Meta, StoryObj } from '@storybook/react-vite'
import { StoriesTabbedContainer } from './stories-tabbed-container'
import { StoriesTabbedContainerList } from './stories-tabbed-container-list'
import { StoriesTabbedContainerTrigger } from './stories-tabbed-container-trigger'
import { StoriesTabbedContainerContent } from './stories-tabbed-container-content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
        <Card>
          <CardHeader>
            <CardTitle>Active Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is where your active stories table or list would go.
            </p>
          </CardContent>
        </Card>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="completed">
        <Card>
          <CardHeader>
            <CardTitle>Completed Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is where your completed stories table or list would go.
            </p>
          </CardContent>
        </Card>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>All Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is where all your stories table or list would go.
            </p>
          </CardContent>
        </Card>
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
        <Card>
          <CardHeader>
            <CardTitle>Active Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Content for active stories.</p>
          </CardContent>
        </Card>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="completed">
        <Card>
          <CardHeader>
            <CardTitle>Completed Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Content for completed stories.</p>
          </CardContent>
        </Card>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>All Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Content for all stories.</p>
          </CardContent>
        </Card>
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
        <Card>
          <CardHeader>
            <CardTitle>Active Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No active stories available.</p>
          </CardContent>
        </Card>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="completed">
        <Card>
          <CardHeader>
            <CardTitle>Completed Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No completed stories available.</p>
          </CardContent>
        </Card>
      </StoriesTabbedContainerContent>

      <StoriesTabbedContainerContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>All Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No stories available.</p>
          </CardContent>
        </Card>
      </StoriesTabbedContainerContent>
    </StoriesTabbedContainer>
  ),
} satisfies Story

