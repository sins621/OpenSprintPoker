import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlayerItem } from './player-item'

const meta = {
  title: 'Components/RoomManager/Players/PlayerItem',
  component: PlayerItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    playerName: 'John Doe',
    timerText: '01:30',
  },
} satisfies Meta<typeof PlayerItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    playerName: 'John Doe',
    timerText: '01:30',
  },
} satisfies Story

export const WithNumericCard = {
  args: {
    playerName: 'Jane Smith',
    timerText: '01:25',
    cardValue: '13',
  },
} satisfies Story

export const WithLowCard = {
  args: {
    playerName: 'Bob Johnson',
    timerText: '01:20',
    cardValue: '1',
  },
} satisfies Story

export const WithHighCard = {
  args: {
    playerName: 'Alice Williams',
    timerText: '01:15',
    cardValue: '89',
  },
} satisfies Story

export const WithQuestionMark = {
  args: {
    playerName: 'Charlie Brown',
    timerText: '01:10',
    cardValue: '?',
  },
} satisfies Story

export const WithInfinity = {
  args: {
    playerName: 'Diana Prince',
    timerText: '01:05',
    cardValue: '∞',
  },
} satisfies Story

export const WithoutCard = {
  args: {
    playerName: 'Eve Adams',
    timerText: '01:00',
  },
} satisfies Story

export const Thinking = {
  args: {
    playerName: 'Frank Miller',
    timerText: '00:55',
    isThinking: true,
  },
} satisfies Story

export const ThinkingWithLongName = {
  args: {
    playerName: 'This is a very long player name that might wrap',
    timerText: '00:50',
    isThinking: true,
  },
} satisfies Story

export const LongName = {
  args: {
    playerName: 'This is a very long player name that might wrap',
    timerText: '00:45',
    cardValue: '21',
  },
} satisfies Story

export const AllCardValues: Story = {
  render: () => {
    const cardValues = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?', '∞'] as const
    
    return (
      <div className="flex flex-col gap-4 w-96">
        {cardValues.map((value, index) => (
          <PlayerItem
            key={value}
            playerName={`Player ${index + 1}`}
            timerText={`00:${String(30 - index).padStart(2, '0')}`}
            cardValue={value}
          />
        ))}
      </div>
    )
  },
}

