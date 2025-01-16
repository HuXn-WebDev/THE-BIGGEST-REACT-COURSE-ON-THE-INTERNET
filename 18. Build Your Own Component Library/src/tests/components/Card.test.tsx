import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";

describe("Card component", () => {
  // 1. Test rendering with default props
  it("renders with default props", () => {
    render(<Card>Default Card</Card>);
    const cardElement = screen.getByText(/Default Card/i);
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass("w-80 h-60");
    expect(cardElement).toHaveClass("shadow-md");
    expect(cardElement).toHaveClass("border-gray-300");
  });

  // 2. Test applying size prop (small)
  it("applies small size class", () => {
    render(<Card size="small">Small Card</Card>);
    const cardElement = screen.getByText(/Small Card/i);
    expect(cardElement).toHaveClass("w-64 h-48");
  });

  // 3. Test applying size prop (large)
  it("applies large size class", () => {
    render(<Card size="large">Large Card</Card>);
    const cardElement = screen.getByText(/Large Card/i);
    expect(cardElement).toHaveClass("w-96 h-72");
  });

  // 4. Test applying shadow prop (none)
  it("applies no shadow when shadow is 'none'", () => {
    render(<Card shadow="none">No Shadow Card</Card>);
    const cardElement = screen.getByText(/No Shadow Card/i);
    expect(cardElement).toHaveClass("shadow-none");
  });

  // 5. Test applying shadow prop (lg)
  it("applies large shadow when shadow is 'lg'", () => {
    render(<Card shadow="lg">Large Shadow Card</Card>);
    const cardElement = screen.getByText(/Large Shadow Card/i);
    expect(cardElement).toHaveClass("shadow-lg");
  });

  // 6. Test applying border prop (none)
  it("applies no border when border is 'none'", () => {
    render(<Card border="none">No Border Card</Card>);
    const cardElement = screen.getByText(/No Border Card/i);
    expect(cardElement).toHaveClass("border-none");
  });

  // 7. Test applying border prop (rounded)
  it("applies rounded border when border is 'rounded'", () => {
    render(<Card border="rounded">Rounded Border Card</Card>);
    const cardElement = screen.getByText(/Rounded Border Card/i);
    expect(cardElement).toHaveClass("border-2 border-gray-300 rounded-lg");
  });

  // 8. Test applying custom className prop
  it("applies additional custom className", () => {
    render(<Card className="custom-class">Custom Class Card</Card>);
    const cardElement = screen.getByText(/Custom Class Card/i);
    expect(cardElement).toHaveClass("custom-class");
  });

  // 9. Test rendering children correctly
  it("renders children correctly", () => {
    render(
      <Card>
        <div>Child Content</div>
      </Card>
    );
    const childContent = screen.getByText(/Child Content/i);
    expect(childContent).toBeInTheDocument();
  });

  // 10. Test combination of size, shadow, and border props
  it("applies correct combination of size, shadow, and border props", () => {
    render(
      <Card size="large" shadow="sm" border="solid">
        Combined Props Card
      </Card>
    );
    const cardElement = screen.getByText(/Combined Props Card/i);
    expect(cardElement).toHaveClass("w-96 h-72");
    expect(cardElement).toHaveClass("shadow-sm");
    expect(cardElement).toHaveClass("border-gray-300");
  });
});
