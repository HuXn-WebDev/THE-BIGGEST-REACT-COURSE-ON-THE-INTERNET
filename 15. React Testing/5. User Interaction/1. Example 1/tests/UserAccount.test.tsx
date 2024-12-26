import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleMessage from "../../src/components/ToggleMessage";

describe("ToggleMessage Component", () => {
  it("should toggle the message visibility when button is clicked", async () => {
    // Render the component
    render(<ToggleMessage />);

    // Get the button element
    const button = screen.getByRole("button", { name: /toggle message/i });

    // Initially, the message should not be visible
    expect(screen.queryByText(/the message is visible!/i)).toBeNull();

    // Simulate a button click to show the message
    await userEvent.click(button);

    // After clicking, the message should be visible
    expect(screen.getByText(/the message is visible!/i)).toBeInTheDocument();

    // Simulate another button click to hide the message
    await userEvent.click(button);

    // After clicking again, the message should be hidden
    expect(screen.queryByText(/the message is visible!/i)).toBeNull();
  });
});
