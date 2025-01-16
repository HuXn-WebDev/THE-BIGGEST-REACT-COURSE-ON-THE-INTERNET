import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Accordion, AccordionSection } from "../../components/Accordion";

describe("Accordion Component", () => {
  it("renders Accordion correctly", () => {
    render(
      <Accordion>
        <AccordionSection title="Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
      </Accordion>
    );

    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.queryByText("Content for Section 1")).not.toBeInTheDocument();
  });

  it("toggles section content visibility", () => {
    render(
      <Accordion>
        <AccordionSection title="Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
      </Accordion>
    );

    fireEvent.click(screen.getByText("Section 1"));
    expect(screen.getByText("Content for Section 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Section 1"));
    expect(screen.queryByText("Content for Section 1")).not.toBeInTheDocument();
  });
});
