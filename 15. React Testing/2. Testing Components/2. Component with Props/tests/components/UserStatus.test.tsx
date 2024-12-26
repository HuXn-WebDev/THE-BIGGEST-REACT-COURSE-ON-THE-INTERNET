// 1. Import all the necessary packages
// 2. Describe your test suite
// 3. Write your tests
// 4. Render your component to the DOM (for testing)
// 5. Select the elements you want to test
// 6. Assert the expected results

import { render, screen } from "@testing-library/react";
import UserStatus from "../../src/components/UserStatus";

describe("UserStatus Component", () => {
  it("displays a welcome message when an email is provided", () => {
    render(<UserStatus email="john@example.com" />);

    // Check if the welcome message is rendered
    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("displays the sign up button when no email is provided", () => {
    render(<UserStatus email="" />);

    // Check if the sign up button is rendered
    const signUpButton = screen.getByText(/Sign Up/i);
    expect(signUpButton).toBeInTheDocument();
  });
});
