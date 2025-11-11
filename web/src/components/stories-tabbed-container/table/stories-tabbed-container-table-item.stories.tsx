import type { Meta, StoryObj } from "@storybook/react-vite";
import { StoriesTabbedContainerTable } from "./stories-tabbed-container-table";
import { StoriesTabbedContainerTableItem } from "./stories-tabbed-container-table-item";

const meta = {
  title: "Components/Stories/StoriesTabbedContainerTableItem",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        estimated={5}
        time="2h 30m"
        onClick={() => console.log("Item clicked")}
        onDelete={() => console.log("Item deleted")}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story;

export const LongTitle = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="This is a very long story title that might wrap to multiple lines and should be handled gracefully"
        estimated={13}
        time="6h 45m"
        onClick={() => console.log("Item clicked")}
        onDelete={() => console.log("Item deleted")}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story;

export const WithoutTime = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        estimated={5}
        onClick={() => console.log("Item clicked")}
        onDelete={() => console.log("Item deleted")}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story;

export const WithoutEstimated = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        time="2h 30m"
        onClick={() => console.log("Item clicked")}
        onDelete={() => console.log("Item deleted")}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story;

export const WithoutDelete = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        estimated={5}
        time="2h 30m"
        onClick={() => console.log("Item clicked")}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story;

export const WithoutClick = {
  args: {},
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        estimated={5}
        time="2h 30m"
        onDelete={() => console.log("Item deleted")}
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story;

export const WithCustomActions = {
  render: () => (
    <StoriesTabbedContainerTable>
      <StoriesTabbedContainerTableItem
        title="User Authentication Story"
        estimated={5}
        time="2h 30m"
        onClick={() => console.log("Item clicked")}
        actions={
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("Custom action clicked");
              }}
              className="text-sm text-primary hover:underline"
            >
              Edit
            </button>
          </>
        }
      />
    </StoriesTabbedContainerTable>
  ),
} satisfies Story;
