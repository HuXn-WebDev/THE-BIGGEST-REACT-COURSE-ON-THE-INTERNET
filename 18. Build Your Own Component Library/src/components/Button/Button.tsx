import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva("px-4 py-2 rounded focus:outline-none", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-black",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    disabled: {
      true: "bg-gray-300 text-gray-600 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    disabled: false,
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  disabled,
  children,
  className,
  ...props
}) => {
  const mergedClassNames = twMerge(
    buttonStyles({ variant, size, disabled }),
    className
  );

  return (
    <button {...props} className={mergedClassNames} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
