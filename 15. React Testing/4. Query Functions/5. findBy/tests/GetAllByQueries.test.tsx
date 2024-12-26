import { render, screen } from "@testing-library/react";
import GetAllByQueries from "../../src/components/GetAllByQueries";

describe("InteractiveDisabledComponent", () => {
  it("should render multiple elements that can be queried by various methods", () => {
    render(<GetAllByQueries />);

    const inputsByLabelText = screen.getAllByLabelText(/Label for Input/i);
    expect(inputsByLabelText.length).toBe(2);
    inputsByLabelText.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });

    const inputsByPlaceholderText =
      screen.getAllByPlaceholderText(/Enter something/i);
    expect(inputsByPlaceholderText.length).toBe(2);
    inputsByPlaceholderText.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });

    const paragraphsByText = screen.getAllByText(/This is a paragraph/i);
    expect(paragraphsByText.length).toBe(2);
    paragraphsByText.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });

    const inputsByDisplayValue =
      screen.getAllByDisplayValue(/Some display value/i);
    expect(inputsByDisplayValue.length).toBe(1);
    expect(inputsByDisplayValue[0]).toBeInTheDocument();
    expect(inputsByDisplayValue[0]).toBeDisabled();

    const inputsByAnotherDisplayValue = screen.getAllByDisplayValue(
      /Another display value/i
    );
    expect(inputsByAnotherDisplayValue.length).toBe(1);
    expect(inputsByAnotherDisplayValue[0]).toBeInTheDocument();
    expect(inputsByAnotherDisplayValue[0]).toBeDisabled();

    const imagesByAltText = screen.getAllByAltText(/A sample image/i);
    expect(imagesByAltText.length).toBe(1);
    expect(imagesByAltText[0]).toBeInTheDocument();

    const imagesByAnotherAltText =
      screen.getAllByAltText(/Another sample image/i);
    expect(imagesByAnotherAltText.length).toBe(1);
    expect(imagesByAnotherAltText[0]).toBeInTheDocument();

    const divsByTitle = screen.getAllByTitle(/div with a title attribute/i);
    expect(divsByTitle.length).toBe(2);
    divsByTitle.forEach((div) => {
      expect(div).toBeInTheDocument();
    });

    const buttonsByRole = screen.getAllByRole("button", {
      name: /This is a button/i,
    });
    expect(buttonsByRole.length).toBe(2);
    buttonsByRole.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });

    const divsByTestId = screen.getAllByTestId(/custom-test-id/i);
    expect(divsByTestId.length).toBe(2);
    divsByTestId.forEach((div) => {
      expect(div).toBeInTheDocument();
    });
  });
});
