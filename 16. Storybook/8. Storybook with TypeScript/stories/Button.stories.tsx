import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    label: "Click Me",
    color: "#007bff",
    disabled: false,
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    label: "Disabled Button",
    color: "#888",
    disabled: true,
  },
};

export const Red: StoryObj<ButtonProps> = {
  args: {
    label: "Red Button",
    color: "#ff0000",
    disabled: false,
  },
};
