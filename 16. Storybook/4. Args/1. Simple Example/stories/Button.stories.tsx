import Button from "../components/Button";

export default {
  title: "Buttons",
  component: Button,
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
    onClick: () => console.log("You clicked me"),
  },
};
