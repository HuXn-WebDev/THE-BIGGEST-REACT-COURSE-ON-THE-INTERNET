import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../../components/Pagination";
import { vi } from "vitest";

describe("Pagination Component", () => {
  it("renders correctly with given total pages", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} />
    );

    expect(screen.getByText("< Prev")).toBeInTheDocument();
    expect(screen.getByText("Next >")).toBeInTheDocument();

    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
  });

  it("calls onPageChange when a page number is clicked", () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    );

    fireEvent.click(screen.getByText("3"));

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("disables 'Prev' button when on the first page", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} />
    );

    const prevButton = screen.getByText("< Prev");
    expect(prevButton).toBeDisabled();
  });

  it("disables 'Next' button when on the last page", () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={vi.fn()} />
    );

    const nextButton = screen.getByText("Next >");
    expect(nextButton).toBeDisabled();
  });

  it("disables 'Prev' and 'Next' buttons when disabled prop is true", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={vi.fn()}
        disabled={true}
      />
    );

    const prevButton = screen.getByText("< Prev");
    const nextButton = screen.getByText("Next >");

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it("highlights the current page with the correct styles", () => {
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={vi.fn()} />
    );

    const currentPageButton = screen.getByText("3");
    expect(currentPageButton).toHaveClass("bg-blue-500");
    expect(currentPageButton).toHaveClass("text-white");

    expect(screen.getByText("1")).not.toHaveClass("bg-blue-500");
    expect(screen.getByText("2")).not.toHaveClass("bg-blue-500");
    expect(screen.getByText("4")).not.toHaveClass("bg-blue-500");
    expect(screen.getByText("5")).not.toHaveClass("bg-blue-500");
  });
});
