import Button from "../components/Button";

export default {
  // Nesting Our Components
  title: "products/Buttons",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// Renaming Stories
Primary.storyName = "Blue Button";
Secondary.storyName = "Green Button";
Secondary.Danger = "Red Button";
