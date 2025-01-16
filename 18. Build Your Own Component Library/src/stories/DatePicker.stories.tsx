import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "../components/DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedDate: "2025-01-01",
    onChange: (date: string) => console.log(date),
  },
};

export const WithCustomSize: Story = {
  args: {
    selectedDate: "2025-01-01",
    onChange: (date: string) => console.log(date),
    size: "sm",
  },
};

export const WithCustomColor: Story = {
  args: {
    selectedDate: "2025-01-01",
    onChange: (date: string) => console.log(date),
    color: "secondary",
  },
};
