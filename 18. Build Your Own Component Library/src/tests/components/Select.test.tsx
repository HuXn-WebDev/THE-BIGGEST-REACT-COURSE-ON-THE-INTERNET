import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "../../components/Select";
import { vi } from "vitest";

describe("Select Component", () => {
  it("renders with the correct options", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ];

    render(<Select options={options} onChange={vi.fn()} />);

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("renders with the correct variant and size classes", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];

    const { container: primaryContainer } = render(
      <Select
        options={options}
        variant="primary"
        size="medium"
        onChange={vi.fn()}
      />
    );
    expect(primaryContainer.firstChild).toHaveClass(
      "bg-white text-black border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    );
    expect(primaryContainer.firstChild).toHaveClass("text-base py-2");

    const { container: secondaryContainer } = render(
      <Select
        options={options}
        variant="secondary"
        size="large"
        onChange={vi.fn()}
      />
    );
    expect(secondaryContainer.firstChild).toHaveClass(
      "bg-gray-200 text-black border-gray-400 focus:ring-gray-500 focus:border-gray-500"
    );
    expect(secondaryContainer.firstChild).toHaveClass("text-lg py-3");
  });

  it("disables the select when the disabled prop is true", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];

    render(<Select options={options} disabled={true} onChange={vi.fn()} />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeDisabled();
  });

  it("renders with the default value if provided", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ];

    render(<Select options={options} value="2" onChange={vi.fn()} />);

    expect(screen.getByRole("combobox")).toHaveValue("2");
  });

  it("applies the correct styles when disabled", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];

    const { container } = render(
      <Select options={options} disabled={true} onChange={vi.fn()} />
    );

    const selectElement = container.firstChild;
    expect(selectElement).toHaveClass("bg-gray-300");
    expect(selectElement).toHaveClass("cursor-not-allowed");
    expect(selectElement).toHaveClass("border-gray-300");
  });
});
