import { cva } from "class-variance-authority";

const buttonStyles = cva("px-4 py-2 rounded-md focus:outline-none", {
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-black",
    },
    size: {
      small: "text-sm py-1 px-3",
      large: "text-lg py-3 px-6",
    },

    state: {
      active: "bg-blue-700",
      disabled: "bg-gray-300 cursor-not-allowed",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "small",
  },
});

interface ButtonProps {
  color?: "primary" | "secondary";
  size?: "small" | "large";
  state?: "active" | "disabled";
  children: React.ReactNode;
}

const Button = ({ color, size, state, children }: ButtonProps) => {
  return (
    <button
      className={buttonStyles({ color, size, state })}
      disabled={state === "disabled"}
    >
      {children}
    </button>
  );
};

export default Button;
