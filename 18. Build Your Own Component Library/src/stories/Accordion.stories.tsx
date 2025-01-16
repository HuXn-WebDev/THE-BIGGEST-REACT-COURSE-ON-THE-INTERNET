import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionSection } from "../components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AccordionSection title="Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
        <AccordionSection title="Section 2">
          <p>Content for Section 2</p>
        </AccordionSection>
        <AccordionSection title="Section 3">
          <p>Content for Section 3</p>
        </AccordionSection>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    children: (
      <>
        <AccordionSection title="Section 1" variant="bordered">
          <p>Content for Section 1</p>
        </AccordionSection>
        <AccordionSection title="Section 2" variant="bordered">
          <p>Content for Section 2</p>
        </AccordionSection>
        <AccordionSection title="Section 3" variant="bordered">
          <p>Content for Section 3</p>
        </AccordionSection>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: (
      <>
        <AccordionSection title="Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
        <AccordionSection title="Section 2">
          <p>Content for Section 2</p>
        </AccordionSection>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: (
      <>
        <AccordionSection title="Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
        <AccordionSection title="Section 2">
          <p>Content for Section 2</p>
        </AccordionSection>
        <AccordionSection title="Section 3">
          <p>Content for Section 3</p>
        </AccordionSection>
      </>
    ),
  },
};
