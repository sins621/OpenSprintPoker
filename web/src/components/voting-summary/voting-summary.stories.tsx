import type { Meta, StoryObj } from '@storybook/react-vite'
import VotingSummaryContainer from './voting-summary-container'
import { VotingSummaryPieChartContainer } from './voting-summary-pie-chart-container'
import { VotingSummaryPieChartArea } from './voting-summary-pie-chart-area'
import { VotingSummaryItemsArea } from './voting-summary-items-area'
import { VotingSummaryPieChart } from './voting-summary-pie-chart'
import { PieChartValues } from './pie-chart-values'
import { VotingSummaryStoryPointItem } from './voting-summary-story-point-item'
import { calculateAverage, getTotalVotes, getChartData, calculatePercentage, getColorForIndex } from './utils'
import { sampleVotes, fewVotes, manyVotes } from './mock'

const meta = {
  title: 'Components/VotingSummary',
  component: VotingSummaryContainer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VotingSummaryContainer>

export default meta
type Story = StoryObj<typeof meta>


export const Default = {
  args: {
    storyTitle: "User Authentication Flow",
  },
  render: () => {
    const votes = sampleVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);
    const chartData = getChartData(votes);

    return (
      <div style={{ width: '800px' }}>
        <VotingSummaryContainer
          storyTitle="User Authentication Flow"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryPieChartContainer>
              <VotingSummaryPieChartArea>
                <VotingSummaryPieChart votes={votes}>
                  <PieChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryPieChart>
              </VotingSummaryPieChartArea>
              <VotingSummaryItemsArea>
                {chartData.map((item, index) => (
                  <VotingSummaryStoryPointItem
                    key={item.storyPoint}
                    storyPoint={item.storyPoint}
                    color={getColorForIndex(index)}
                    percentage={calculatePercentage(item.count, totalVotes)}
                    voteCount={item.count}
                  />
                ))}
              </VotingSummaryItemsArea>
            </VotingSummaryPieChartContainer>
          </div>
        </VotingSummaryContainer>
      </div>
    );
  },
} satisfies Story

export const FewVotes = {
  args: {
    storyTitle: "API Rate Limiting",
  },
  render: () => {
    const votes = fewVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);
    const chartData = getChartData(votes);

    return (
      <div style={{ width: '800px' }}>
        <VotingSummaryContainer
          storyTitle="API Rate Limiting"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryPieChartContainer>
              <VotingSummaryPieChartArea>
                <VotingSummaryPieChart votes={votes}>
                  <PieChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryPieChart>
              </VotingSummaryPieChartArea>
              <VotingSummaryItemsArea>
                {chartData.map((item, index) => (
                  <VotingSummaryStoryPointItem
                    key={item.storyPoint}
                    storyPoint={item.storyPoint}
                    color={getColorForIndex(index)}
                    percentage={calculatePercentage(item.count, totalVotes)}
                    voteCount={item.count}
                  />
                ))}
              </VotingSummaryItemsArea>
            </VotingSummaryPieChartContainer>
          </div>
        </VotingSummaryContainer>
      </div>
    );
  },
} satisfies Story

export const ManyVotes = {
  args: {
    storyTitle: "Database Migration Strategy",
  },
  render: () => {
    const votes = manyVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);
    const chartData = getChartData(votes);

    return (
      <div style={{ width: '800px' }}>
        <VotingSummaryContainer
          storyTitle="Database Migration Strategy"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryPieChartContainer>
              <VotingSummaryPieChartArea>
                <VotingSummaryPieChart votes={votes}>
                  <PieChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryPieChart>
              </VotingSummaryPieChartArea>
              <VotingSummaryItemsArea>
                {chartData.map((item, index) => (
                  <VotingSummaryStoryPointItem
                    key={item.storyPoint}
                    storyPoint={item.storyPoint}
                    color={getColorForIndex(index)}
                    percentage={calculatePercentage(item.count, totalVotes)}
                    voteCount={item.count}
                  />
                ))}
              </VotingSummaryItemsArea>
            </VotingSummaryPieChartContainer>
          </div>
        </VotingSummaryContainer>
      </div>
    );
  },
} satisfies Story

export const LongStoryTitle = {
  args: {
    storyTitle: "Implement comprehensive user authentication flow with OAuth2, JWT tokens, and multi-factor authentication support",
  },
  render: () => {
    const votes = sampleVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);
    const chartData = getChartData(votes);

    return (
      <div style={{ width: '800px' }}>
        <VotingSummaryContainer
          storyTitle="Implement comprehensive user authentication flow with OAuth2, JWT tokens, and multi-factor authentication support"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryPieChartContainer>
              <VotingSummaryPieChartArea>
                <VotingSummaryPieChart votes={votes}>
                  <PieChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryPieChart>
              </VotingSummaryPieChartArea>
              <VotingSummaryItemsArea>
                {chartData.map((item, index) => (
                  <VotingSummaryStoryPointItem
                    key={item.storyPoint}
                    storyPoint={item.storyPoint}
                    color={getColorForIndex(index)}
                    percentage={calculatePercentage(item.count, totalVotes)}
                    voteCount={item.count}
                  />
                ))}
              </VotingSummaryItemsArea>
            </VotingSummaryPieChartContainer>
          </div>
        </VotingSummaryContainer>
      </div>
    );
  },
} satisfies Story

export const SmallWidth = {
  args: {
    storyTitle: "User Authentication Flow",
  },
  render: () => {
    const votes = sampleVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);
    const chartData = getChartData(votes);

    return (
      <div style={{ width: '600px' }}>
        <VotingSummaryContainer
          storyTitle="User Authentication Flow"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '300px' }}>
            <VotingSummaryPieChartContainer>
              <VotingSummaryPieChartArea>
                <VotingSummaryPieChart votes={votes}>
                  <PieChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryPieChart>
              </VotingSummaryPieChartArea>
              <VotingSummaryItemsArea>
                {chartData.map((item, index) => (
                  <VotingSummaryStoryPointItem
                    key={item.storyPoint}
                    storyPoint={item.storyPoint}
                    color={getColorForIndex(index)}
                    percentage={calculatePercentage(item.count, totalVotes)}
                    voteCount={item.count}
                  />
                ))}
              </VotingSummaryItemsArea>
            </VotingSummaryPieChartContainer>
          </div>
        </VotingSummaryContainer>
      </div>
    );
  },
} satisfies Story

export const LargeWidth = {
  args: {
    storyTitle: "User Authentication Flow",
  },
  render: () => {
    const votes = sampleVotes;
    const totalVotes = getTotalVotes(votes);
    const average = calculateAverage(votes);
    const chartData = getChartData(votes);

    return (
      <div style={{ width: '1200px' }}>
        <VotingSummaryContainer
          storyTitle="User Authentication Flow"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '500px' }}>
            <VotingSummaryPieChartContainer>
              <VotingSummaryPieChartArea>
                <VotingSummaryPieChart votes={votes}>
                  <PieChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryPieChart>
              </VotingSummaryPieChartArea>
              <VotingSummaryItemsArea>
                {chartData.map((item, index) => (
                  <VotingSummaryStoryPointItem
                    key={item.storyPoint}
                    storyPoint={item.storyPoint}
                    color={getColorForIndex(index)}
                    percentage={calculatePercentage(item.count, totalVotes)}
                    voteCount={item.count}
                  />
                ))}
              </VotingSummaryItemsArea>
            </VotingSummaryPieChartContainer>
          </div>
        </VotingSummaryContainer>
      </div>
    );
  },
} satisfies Story

