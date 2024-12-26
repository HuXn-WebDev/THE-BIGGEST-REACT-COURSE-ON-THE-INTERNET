import { render, screen } from "@testing-library/react";
import GetByQueries from "../../src/components/GetByQueries";

describe("GetByQueries", () => {
  it("should render the component with the correct heading", () => {
    render(<GetByQueries />);
    const heading = screen.getByText("MyComponent");
    expect(heading).toBeInTheDocument();
  });

  it("should find a button with aria-label submit", () => {
    render(<GetByQueries />);
    const submitButton = screen.getByLabelText("submit");
    expect(submitButton).toBeInTheDocument();
  });

  it("should find an input with placeholder text", () => {
    render(<GetByQueries />);
    const inputField = screen.getByPlaceholderText("Enter text");
    expect(inputField).toBeInTheDocument();
  });

  it("should find an anchor tag with a specific href", () => {
    render(<GetByQueries />);
    const link = screen.getByRole("link", { name: /Visit Example/i });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("should find a div using data-testid", () => {
    render(<GetByQueries />);
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });

  it("should find an element by its role", () => {
    render(<GetByQueries />);
    const button = screen.getByRole("button", { name: "submit" });
    expect(button).toBeInTheDocument();
  });
});
