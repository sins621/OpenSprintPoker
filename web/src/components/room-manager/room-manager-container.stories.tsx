import type { Meta, StoryObj } from "@storybook/react-vite"
import { RoomManagerContainer } from "./room-manager-container"

const meta = {
  title: "Components/RoomManager/Container",
  component: RoomManagerContainer,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    url: "https://example.com/room/abc123",
    headerText: "Voting Completed",
    headerVariant: "default",
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: "500px", margin: "0 auto" }}>
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof RoomManagerContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: "https://example.com/room/abc123",
    headerText: "Voting Completed",
    headerVariant: "default",
  },
}

export const LongUrl: Story = {
  args: {
    url: "https://example.com/very/long/room/url/with/many/segments/abc123def456ghi789",
    headerText: "Voting Completed",
    headerVariant: "yellow",
  },
}

export const ShortUrl: Story = {
  args: {
    url: "https://ex.co/r/xyz",
    headerText: "Voting Completed",
    headerVariant: "yellow",
  },
}

export const Localhost: Story = {
  args: {
    url: "http://localhost:3000/room/test-room-id",
    headerText: "Voting Completed",
    headerVariant: "yellow",
  },
}

export const YellowVariant: Story = {
  args: {
    url: "https://example.com/room/abc123",
    headerText: "Voting Completed",
    headerVariant: "yellow",
  },
}

export const BlueVariant: Story = {
  args: {
    url: "https://example.com/room/abc123",
    headerText: "Voting Completed",
    headerVariant: "blue",
  },
}

export const GreenVariant: Story = {
  args: {
    url: "https://example.com/room/abc123",
    headerText: "Voting Completed",
    headerVariant: "green",
  },
}

export const RedVariant: Story = {
  args: {
    url: "https://example.com/room/abc123",
    headerText: "Voting Completed",
    headerVariant: "red",
  },
}

export const PinkVariant: Story = {
  args: {
    url: "https://example.com/room/abc123",
    headerText: "Voting Completed",
    headerVariant: "pink",
  },
}

export const OrangeVariant: Story = {
  args: {
    url: "https://example.com/room/abc123",
    headerText: "Voting Completed",
    headerVariant: "orange",
  },
}

export const PurpleVariant: Story = {
  args: {
    url: "https://example.com/room/abc123",
    headerText: "Voting Completed",
    headerVariant: "purple",
  },
}

