import React, { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface AccordionProps {
  children: ReactNode;
  variant?: "default" | "bordered";
  size?: "small" | "large";
}

const accordionStyles = cva("space-y-2", {
  variants: {
    variant: {
      default: "bg-white",
      bordered: "border border-gray-300 rounded-lg",
    },
    size: {
      small: "text-sm",
      large: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "large",
  },
});

const Accordion = ({ children, variant, size }: AccordionProps) => {
  return (
    <div className={twMerge(accordionStyles({ variant, size }))}>
      {children}
    </div>
  );
};

export default Accordion;
