import type { Preview } from "@storybook/react";
import { withBackgroundColor } from "./decorators";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [withBackgroundColor];

export default preview;
