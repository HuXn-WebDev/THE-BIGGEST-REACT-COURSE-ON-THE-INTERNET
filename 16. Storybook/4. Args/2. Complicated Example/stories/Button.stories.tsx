import { FaHome } from "react-icons/fa";
import Button from "../components/Button";

export default {
  title: "Buttons",
  component: Button,
};

export const Primary = {
  args: {
    primary: true,
    label: "Primary Button",
    onClick: () => alert("You clicked the Primary button"),
    loading: false,
    size: "medium",
    color: "#007bff",
    fullWidth: false,
    icon: <FaHome />,
    iconPosition: "left",
    ariaLabel: "primary-button",
  },
};
