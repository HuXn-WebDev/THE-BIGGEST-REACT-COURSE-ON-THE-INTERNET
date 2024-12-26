import { render, screen } from "@testing-library/react";
import FindingElementsByRole from "../../src/components/FindingElementsByRole";

// describe("FindElementsByRole", () => {
//   it("should query the link element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("link")).toBeInTheDocument();
//   });

//   it("should query the button element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("button")).toBeInTheDocument();
//   });

//   it("should query the footer element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("contentinfo")).toBeInTheDocument();
//   });

//   it("should query the h1 element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("heading")).toBeInTheDocument();
//   });

//   it("should query the header element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("banner")).toBeInTheDocument();
//   });

//   it("should query the img element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("img")).toBeInTheDocument();
//   });

//   it("should query the checkbox element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("checkbox")).toBeInTheDocument();
//   });

//   it("should query the number input element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("spinbutton")).toBeInTheDocument();
//   });

//   it("should query the radio element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("radio")).toBeInTheDocument();
//   });

//   it("should query the text input element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("textbox")).toBeInTheDocument();
//   });

//   it("should query the list element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("list")).toBeInTheDocument();
//   });

//   it("should query the listitem element", () => {
//     render(<FindingElementsByRole />);
//     expect(screen.getByRole("listitem")).toBeInTheDocument();
//   });
// });

// -----------------------
// describe("FindElementsByRole", () => {
//   it("should find elements by their roles", () => {
//     render(<FindingElementsByRole />);

//     const roles = [
//       "link",
//       "button",
//       "contentinfo",
//       "heading",
//       "banner",
//       "img",
//       "checkbox",
//       "spinbutton",
//       "radio",
//       "textbox",
//       "list",
//       "listitem",
//     ];

//     roles.map((role) => expect(screen.getByRole(role)).toBeInTheDocument());
//   });
// });

// -----------------------------------

// Multiple elements with same role
describe("FindElementsByRole", () => {
  it("should find elements by their roles", () => {
    render(<FindingElementsByRole />);

    const submitButton = screen.getByRole("button", { name: /Submit/i });
    const learnMoreButton = screen.getByRole("button", { name: /Learn/i });
    expect(submitButton).toBeInTheDocument();
    expect(learnMoreButton).toBeInTheDocument();
  });
});
