import type { Meta, StoryObj } from '@storybook/react-vite'
import { VotingSummaryPieChart } from './voting-summary-pie-chart'
import { ChartValues } from './chart-values'
import { sampleVotes, fewVotes, manyVotes } from '../../utils/mock'
import { calculateAverage, getTotalVotes } from '../../utils/utils'

const meta = {
  title: 'Components/VotingSummary/VotingSummaryPieChart',
  component: VotingSummaryPieChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VotingSummaryPieChart>

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
        <VotingSummaryPieChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryPieChart>
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
        <VotingSummaryPieChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryPieChart>
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
        <VotingSummaryPieChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryPieChart>
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
        <VotingSummaryPieChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryPieChart>
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
        <VotingSummaryPieChart votes={votes}>
          <ChartValues
            votedCount={totalVotes}
            averageStoryPoint={average}
          />
        </VotingSummaryPieChart>
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
        <VotingSummaryPieChart votes={sampleVotes} />
      </div>
    );
  },
} satisfies Story

