import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = {
  args: {
    label: "Click Me",
    color: "#007bff",
    disabled: false,
  },
};

export const DisabledButton = {
  args: {
    label: "Disabled",
    color: "#888",
    disabled: true,
  },
};
