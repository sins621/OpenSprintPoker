import type { Meta, StoryObj } from '@storybook/react-vite'
import VotingSummaryContainer from './components/container/voting-summary-container'
import { VotingSummaryChartContainer } from './components/layout/voting-summary-pie-chart-container'
import { VotingSummaryChartArea } from './components/layout/voting-summary-pie-chart-area'
import { VotingSummaryItemsArea } from './components/layout/voting-summary-items-area'
import { VotingSummaryPieChart } from './components/charts/voting-summary-pie-chart'
import { VotingSummaryBarChart } from './components/charts/voting-summary-bar-chart'
import { ChartValues } from './components/charts/chart-values'
import { VotingSummaryStoryPointItem } from './components/items/voting-summary-story-point-item'
import { calculateAverage, getTotalVotes, getChartData, calculatePercentage, getColorForIndex } from './utils/utils'
import { sampleVotes, fewVotes, manyVotes } from './utils/mock'

const meta = {
  title: 'Components/VotingSummary',
  component: VotingSummaryContainer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '800px' }}>
        <Story />
      </div>
    ),
  ],
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
      <>
        <VotingSummaryContainer
          storyTitle="User Authentication Flow"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryChartContainer>
              <VotingSummaryChartArea>
                <VotingSummaryPieChart votes={votes}>
                  <ChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryPieChart>
              </VotingSummaryChartArea>
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
            </VotingSummaryChartContainer>
          </div>
        </VotingSummaryContainer>
        <VotingSummaryContainer
          storyTitle="User Authentication Flow"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryChartContainer>
              <VotingSummaryChartArea>
                <VotingSummaryBarChart votes={votes}>
                  <ChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryBarChart>
              </VotingSummaryChartArea>
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
            </VotingSummaryChartContainer>
          </div>
        </VotingSummaryContainer>
      </>
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
      <>
        <VotingSummaryContainer
          storyTitle="API Rate Limiting"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryChartContainer>
              <VotingSummaryChartArea>
                <VotingSummaryPieChart votes={votes}>
                  <ChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryPieChart>
              </VotingSummaryChartArea>
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
            </VotingSummaryChartContainer>
          </div>
        </VotingSummaryContainer>
        <VotingSummaryContainer
          storyTitle="API Rate Limiting"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryChartContainer>
              <VotingSummaryChartArea>
                <VotingSummaryBarChart votes={votes}>
                  <ChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryBarChart>
              </VotingSummaryChartArea>
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
            </VotingSummaryChartContainer>
          </div>
        </VotingSummaryContainer>
      </>
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
      <>
        <VotingSummaryContainer
          storyTitle="Database Migration Strategy"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryChartContainer>
              <VotingSummaryChartArea>
                <VotingSummaryPieChart votes={votes}>
                  <ChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryPieChart>
              </VotingSummaryChartArea>
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
            </VotingSummaryChartContainer>
          </div>
        </VotingSummaryContainer>
        <VotingSummaryContainer
          storyTitle="Database Migration Strategy"
          onShowCards={() => console.log('Show Cards clicked')}
          onPieChartClick={() => console.log('Pie chart clicked')}
          onBarChartClick={() => console.log('Bar chart clicked')}
        >
          <div style={{ height: '400px' }}>
            <VotingSummaryChartContainer>
              <VotingSummaryChartArea>
                <VotingSummaryBarChart votes={votes}>
                  <ChartValues
                    votedCount={totalVotes}
                    averageStoryPoint={average}
                  />
                </VotingSummaryBarChart>
              </VotingSummaryChartArea>
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
            </VotingSummaryChartContainer>
          </div>
        </VotingSummaryContainer>
      </>
    );
  },
} satisfies Story
