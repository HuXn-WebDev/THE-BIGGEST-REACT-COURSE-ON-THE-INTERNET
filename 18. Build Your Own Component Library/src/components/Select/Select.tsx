import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const selectStyles = cva(
  "block w-full px-4 py-2 rounded focus:outline-none border",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500",
        secondary:
          "bg-gray-200 text-black border-gray-400 focus:ring-gray-500 focus:border-gray-500",
      },
      size: {
        small: "text-sm py-1",
        medium: "text-base py-2",
        large: "text-lg py-3",
      },
      disabled: {
        true: "bg-gray-300 text-gray-600 cursor-not-allowed border-gray-300",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      disabled: false,
    },
  }
);

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  options: { label: string; value: string }[];
}

const Select = ({
  variant,
  size,
  disabled,
  options,
  className,
  ...props
}: SelectProps) => {
  const mergedClassNames = twMerge(
    selectStyles({ variant, size, disabled }),
    className
  );

  return (
    <select {...props} className={mergedClassNames} disabled={disabled}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
