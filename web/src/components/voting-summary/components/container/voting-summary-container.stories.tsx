import type { Meta, StoryObj } from '@storybook/react-vite'
import VotingSummaryContainer from './voting-summary-container'

const meta = {
  title: 'Components/VotingSummary/VotingSummaryContainer',
  component: VotingSummaryContainer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    storyTitle: 'User Authentication Flow',
    onShowCards: () => console.log('Show Cards clicked'),
    onPieChartClick: () => console.log('Pie chart clicked'),
    onBarChartClick: () => console.log('Bar chart clicked'),
  },
} satisfies Meta<typeof VotingSummaryContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    storyTitle: 'User Authentication Flow',
  },
} satisfies Story

export const WithChildren = {
  args: {
    storyTitle: 'User Authentication Flow',
    children: (
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Voting results will be displayed here
        </p>
      </div>
    ),
  },
} satisfies Story

export const LongStoryTitle = {
  args: {
    storyTitle: 'Implement comprehensive user authentication flow with OAuth2, JWT tokens, and multi-factor authentication support',
  },
} satisfies Story

export const WithVotingContent = {
  args: {
    storyTitle: 'API Rate Limiting',
    children: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm">Votes: 5</span>
          <span className="text-sm text-muted-foreground">Average: 8</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center p-2 border rounded">
            <div className="text-lg font-semibold">5</div>
            <div className="text-xs text-muted-foreground">votes</div>
          </div>
          <div className="text-center p-2 border rounded">
            <div className="text-lg font-semibold">8</div>
            <div className="text-xs text-muted-foreground">average</div>
          </div>
          <div className="text-center p-2 border rounded">
            <div className="text-lg font-semibold">13</div>
            <div className="text-xs text-muted-foreground">max</div>
          </div>
        </div>
      </div>
    ),
  },
} satisfies Story

export const WithoutCallbacks = {
  args: {
    storyTitle: 'Database Migration Strategy',
  },
} satisfies Story

