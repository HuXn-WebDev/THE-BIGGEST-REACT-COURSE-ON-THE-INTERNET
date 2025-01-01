import React from "react";
import { Decorator } from "@storybook/react";

export const withBackgroundColor: Decorator = (StoryFn) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
      }}
    >
      <StoryFn />
    </div>
  );
};
