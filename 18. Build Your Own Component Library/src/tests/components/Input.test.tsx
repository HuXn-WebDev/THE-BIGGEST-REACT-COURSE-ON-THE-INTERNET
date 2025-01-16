import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "../../components/Input";

describe("Input component", () => {
  it("should render correctly", () => {
    render(<Input placeholder="Test input" />);
    const inputElement = screen.getByPlaceholderText("Test input");
    expect(inputElement).toBeInTheDocument();
  });

  it("should apply the primary variant by default", () => {
    render(<Input placeholder="Primary variant" />);
    const inputElement = screen.getByPlaceholderText("Primary variant");
    expect(inputElement).toHaveClass("border-blue-500");
    expect(inputElement).toHaveClass("text-blue-500");
    expect(inputElement).toHaveClass("focus:ring-blue-500");
  });

  it("should apply the secondary variant when specified", () => {
    render(<Input placeholder="Secondary variant" variant="secondary" />);
    const inputElement = screen.getByPlaceholderText("Secondary variant");
    expect(inputElement).toHaveClass("border-gray-500");
    expect(inputElement).toHaveClass("text-gray-500");
    expect(inputElement).toHaveClass("focus:ring-gray-500");
  });

  it("should apply the error variant when specified", () => {
    render(<Input placeholder="Error variant" variant="error" />);
    const inputElement = screen.getByPlaceholderText("Error variant");
    expect(inputElement).toHaveClass("border-red-500");
    expect(inputElement).toHaveClass("text-red-500");
    expect(inputElement).toHaveClass("focus:ring-red-500");
  });

  it("should apply the small size when specified", () => {
    render(<Input placeholder="Small size" size="small" />);
    const inputElement = screen.getByPlaceholderText("Small size");
    expect(inputElement).toHaveClass("text-sm");
  });

  it("should apply the medium size by default", () => {
    render(<Input placeholder="Medium size" />);
    const inputElement = screen.getByPlaceholderText("Medium size");
    expect(inputElement).toHaveClass("text-base");
  });

  it("should apply the large size when specified", () => {
    render(<Input placeholder="Large size" size="large" />);
    const inputElement = screen.getByPlaceholderText("Large size");
    expect(inputElement).toHaveClass("text-lg");
  });

  it("should be disabled when the disabled prop is passed", () => {
    render(<Input placeholder="Disabled input" disabled />);
    const inputElement = screen.getByPlaceholderText("Disabled input");
    expect(inputElement).toBeDisabled();
  });

  it("should not be disabled by default", () => {
    render(<Input placeholder="Enabled input" />);
    const inputElement = screen.getByPlaceholderText("Enabled input");
    expect(inputElement).not.toBeDisabled();
  });

  it("should merge custom className correctly", () => {
    render(<Input placeholder="Custom class" className="custom-class" />);
    const inputElement = screen.getByPlaceholderText("Custom class");
    expect(inputElement).toHaveClass("custom-class");
  });
});
