import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputStyles = cva("px-4 py-2 border rounded focus:outline-none", {
  variants: {
    variant: {
      primary: "border-blue-500 text-blue-500 focus:ring-blue-500",
      secondary: "border-gray-500 text-gray-500 focus:ring-gray-500",
      error: "border-red-500 text-red-500 focus:ring-red-500",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    disabled: {
      true: "bg-gray-200 text-gray-500 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    disabled: false,
  },
});

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "primary" | "secondary" | "error";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const Input = ({
  variant,
  size,
  disabled,
  className,
  ...props
}: InputProps) => {
  const mergedClassNames = twMerge(
    inputStyles({ variant, size, disabled }),
    className
  );

  return <input {...props} className={mergedClassNames} disabled={disabled} />;
};

export default Input;
