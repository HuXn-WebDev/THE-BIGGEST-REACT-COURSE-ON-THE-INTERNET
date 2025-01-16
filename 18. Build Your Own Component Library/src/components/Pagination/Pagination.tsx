import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const paginationStyles = cva("flex items-center space-x-2", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    variant: {
      default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    },
    disabled: {
      true: "bg-gray-200 text-gray-400 cursor-not-allowed",
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "default",
    disabled: false,
  },
});

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: "small" | "medium" | "large";
  variant?: "default" | "primary" | "secondary";
  disabled?: boolean;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  size,
  variant,
  disabled,
}: PaginationProps) => {
  const mergedClassNames = twMerge(
    paginationStyles({ size, variant, disabled })
  );

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-4 py-2 rounded ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
          onClick={() => handlePageChange(i)}
          disabled={disabled}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={mergedClassNames}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1 || disabled}
        className="px-4 py-2 rounded"
      >
        &lt; Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages || disabled}
        className="px-4 py-2 rounded"
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
