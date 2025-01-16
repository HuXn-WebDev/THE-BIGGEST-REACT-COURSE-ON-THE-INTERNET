import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button Component", () => {
  it("should render a button with default styles", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Click me");

    expect(button).toHaveClass("bg-blue-500");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveClass("text-base");

    expect(button).not.toBeDisabled();
  });

  it("should render a button with secondary variant", () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("bg-gray-500");
    expect(button).toHaveClass("text-black");
  });

  it("should render a button with small size", () => {
    render(<Button size="small">Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-sm");
  });

  it("should render a button with large size", () => {
    render(<Button size="large">Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-lg");
  });

  it("should render a disabled button", () => {
    render(<Button disabled={true}>Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveClass("bg-gray-300");
    expect(button).toHaveClass("text-gray-600");
  });

  it("should merge custom class name with default styles", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("custom-class");

    expect(button).toHaveClass("bg-blue-500");
  });

  it("should render button with correct children text", () => {
    render(<Button>Submit</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Submit");
  });
});
