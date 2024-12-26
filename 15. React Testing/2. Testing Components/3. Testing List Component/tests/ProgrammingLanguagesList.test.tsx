import { render, screen } from "@testing-library/react";
import ProgrammingLanguageList from "../../src/components/ProgrammingLanguagesList";

describe("ProgrammingLanguageList Component", () => {
  it("should render a list of programming languages", () => {
    const languages = ["JavaScript", "Python", "Ruby", "Java", "C++"];

    render(<ProgrammingLanguageList languages={languages} />);

    // Check if each language is rendered
    languages.forEach((language) => {
      expect(screen.getByText(language)).toBeInTheDocument();
    });
  });

  it("should render a message when list is empty", () => {
    render(<ProgrammingLanguageList languages={[]} />);

    // Check if the "No programming languages found." message is displayed
    expect(screen.getByText(/No programming/i)).toBeInTheDocument();
  });
});
