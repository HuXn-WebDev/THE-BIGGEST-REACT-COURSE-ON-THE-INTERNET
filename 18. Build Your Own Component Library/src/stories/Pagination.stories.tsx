import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "../components/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page: number) => console.log(`Page changed to ${page}`),
    size: "medium",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page: number) => console.log(`Page changed to ${page}`),
    size: "medium",
    variant: "primary",
  },
};

export const Small: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page: number) => console.log(`Page changed to ${page}`),
    size: "small",
    variant: "default",
  },
};

export const Large: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page: number) => console.log(`Page changed to ${page}`),
    size: "large",
    variant: "default",
  },
};

export const Disabled: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page: number) => console.log(`Page changed to ${page}`),
    size: "medium",
    variant: "default",
    disabled: true,
  },
};
