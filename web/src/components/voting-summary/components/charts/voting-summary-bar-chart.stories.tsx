import type { Meta, StoryObj } from '@storybook/react-vite'
import { VotingSummaryBarChart } from './voting-summary-bar-chart'
import { ChartValues } from './chart-values'
import { sampleVotes, fewVotes, manyVotes } from '../../utils/mock'
import { calculateAverage, getTotalVotes } from '../../utils/utils'

const meta = {
  title: 'Components/VotingSummary/VotingSummaryBarChart',
  component: VotingSummaryBarChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VotingSummaryBarChart>

export default meta
type Story = StoryObj<typeof meta>


export const Default = {
  args: {
    votes: sampleVotes,
  },
  render: () => {
    const votes = sampleVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);

    return (
      <div style={{ width: '800px', height: '400px' }}>
        <VotingSummaryBarChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryBarChart>
      </div>
    );
  },
} satisfies Story

export const SmallWidth = {
  args: {
    votes: sampleVotes,
  },
  render: () => {
    const votes = sampleVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);

    return (
      <div style={{ width: '600px', height: '300px' }}>
        <VotingSummaryBarChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryBarChart>
      </div>
    );
  },
} satisfies Story

export const LargeWidth = {
  args: {
    votes: sampleVotes,
  },
  render: () => {
    const votes = sampleVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);

    return (
      <div style={{ width: '1200px', height: '500px' }}>
        <VotingSummaryBarChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryBarChart>
      </div>
    );
  },
} satisfies Story

export const FewVotes = {
  args: {
    votes: fewVotes,
  },
  render: () => {
    const votes = fewVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);

    return (
      <div style={{ width: '800px', height: '400px' }}>
        <VotingSummaryBarChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryBarChart>
      </div>
    );
  },
} satisfies Story

export const ManyVotes = {
  args: {
    votes: manyVotes,
  },
  render: () => {
    const votes = manyVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);

    return (
      <div style={{ width: '800px', height: '400px' }}>
        <VotingSummaryBarChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryBarChart>
      </div>
    );
  },
} satisfies Story

export const WithoutChildren = {
  args: {
    votes: sampleVotes,
  },
  render: () => {
    return (
      <div style={{ width: '800px', height: '400px' }}>
        <VotingSummaryBarChart votes={sampleVotes} />
      </div>
    );
  },
} satisfies Story

