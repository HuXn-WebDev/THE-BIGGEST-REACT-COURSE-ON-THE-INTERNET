import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    placeholder: "Primary Input",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    placeholder: "Secondary Input",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    placeholder: "Small Input",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    placeholder: "Large Input",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    size: "medium",
    disabled: true,
    placeholder: "Disabled Input",
  },
};
