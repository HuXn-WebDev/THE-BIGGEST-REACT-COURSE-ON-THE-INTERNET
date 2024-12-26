import { render, screen } from "@testing-library/react";
import FindAllByQueries from "../../src/components/findAllByQueries";

describe("TestComponent", () => {
  beforeEach(() => {
    render(<FindAllByQueries />);
  });

  it("finds all elements by text", async () => {
    const paragraphs = await screen.findAllByText(/Item \d/);
    expect(paragraphs).toHaveLength(3);
    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });
  });

  it("finds all elements by role", async () => {
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(3);
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it("finds all elements by placeholder text", async () => {
    const inputs = await screen.findAllByPlaceholderText("Enter text here");
    expect(inputs).toHaveLength(3);
    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });

  it("finds all elements by alt text", async () => {
    const images = await screen.findAllByAltText("test-image");
    expect(images).toHaveLength(3);
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
  });

  it("finds all elements by display value", async () => {
    const inputs = await screen.findAllByDisplayValue(/Test input \d/);
    expect(inputs).toHaveLength(3);
    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });

  it("finds all elements by test ID", async () => {
    const testElements = await screen.findAllByTestId("test-element");
    expect(testElements).toHaveLength(3);
    testElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
