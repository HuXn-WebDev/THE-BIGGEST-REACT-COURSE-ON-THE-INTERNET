import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
        { name: "sky blue", value: "#00bcd4" },
        { name: "sunset orange", value: "#ff5722" },
        { name: "mint green", value: "#4caf50" },
        { name: "vivid purple", value: "#9c27b0" },
        { name: "lemon yellow", value: "#ffeb3b" },
        { name: "deep blue", value: "#2196f3" },
        { name: "coral pink", value: "#ff4081" },
        { name: "electric lime", value: "#cddc39" },
        { name: "midnight blue", value: "#003366" },
        { name: "hot pink", value: "#e91e63" },
        { name: "goldenrod", value: "#ff9800" },
        { name: "slate gray", value: "#607d8b" },
        { name: "lavender", value: "#9c27b0" },
        { name: "chartreuse", value: "#7fff00" },
        { name: "peach", value: "#ffb6b9" },
        { name: "aquamarine", value: "#00ffff" },
        { name: "rosewood", value: "#7a2a3d" },
      ],
    },
    controls: {
      expanded: true,
    },
  },
};

export const Default = {
  args: {
    label: "Click Me",
    color: "blue",
    onClick: () => alert("Button clicked!"),
  },
};

export const RedButton = {
  args: {
    label: "Red Button",
    color: "red",
    onClick: () => alert("Red Button clicked!"),
  },
};
