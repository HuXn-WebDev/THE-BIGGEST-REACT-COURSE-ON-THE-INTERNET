// 1. Render and screen are imported from @testing-library/react to help with rendering the component and interacting with the elements on the screen.
import { render, screen } from "@testing-library/react";

// 2. Import the component that you wanna test.
import HelloWorld from "../../src/components/HelloWorld";

// 3. Describing the test suit (optional)
describe("Hello World Component", () => {
  // 4. The actual test
  it("should render a hello world component", () => {
    // 5.Render the "HelloWorld" component to the screen
    render(<HelloWorld />);
    // 6. Searches the rendered screen for text that says "HelloWorld".
    expect(screen.getByText("HelloWorld")).toBeInTheDocument();
  });
});
