import Button from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    // Color picker for backgroundColor
    backgroundColor: { control: "color" },

    // Dropdown to select button size
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },

    // Control the label text of the button (can be typed in Storybook UI)
    label: {
      control: "text",
      description: "Text displayed on the button",
    },

    // Control the border radius to make the button rounded
    borderRadius: {
      control: "number",
      min: 0,
      max: 50,
      step: 1,
      description: "Control the border radius to make button corners rounded",
    },

    // Control font size of the button text
    fontSize: {
      control: "text",
      description: "Font size for the button text (e.g., '16px', '1rem')",
    },

    // Control the button's text color
    textColor: {
      control: "color",
      description: "Color of the button's text",
    },
  },
};

export const Primary = {
  args: {
    label: "Click me",
    backgroundColor: "#007bff",
    size: "medium",
    borderRadius: 4,
    fontSize: "16px",
    textColor: "#ffffff",
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    backgroundColor: "#6c757d",
    size: "small",
    borderRadius: 8,
    fontSize: "14px",
    textColor: "#ffffff",
  },
};
