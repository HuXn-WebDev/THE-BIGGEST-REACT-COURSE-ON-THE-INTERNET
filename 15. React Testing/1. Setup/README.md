### 1. **Set up the Project**

Before diving into testing configuration, ensure you have a basic React + TypeScript project set up with **Vite**. If you don’t already have one, follow these steps:

```bash
# Create a new Vite project with React and TypeScript template
npm create vite@latest my-react-app --template react-ts

cd my-react-app

# Install dependencies
npm install
```

### 2. **Install Testing Dependencies**

You'll need to install **Vitest**, **React Testing Library**, **jsdom**, and some other utility packages.

Run the following commands to install them:

```bash
# Install Vitest (test runner and assertion library)
npm install --save-dev vitest

# Install React Testing Library (for testing React components)
npm install --save-dev @testing-library/react @testing-library/user-event

# Install jsdom (provides a simulated DOM environment for Node.js)
npm install --save-dev jsdom

# Install TypeScript types for testing libraries
npm install --save-dev @types/jest @testing-library/jest-dom

npm install --save-dev @testing-library/jest-dom
```

### 3. **Configure Vitest**

You need to configure **Vitest** to work seamlessly with **React**, **TypeScript**, and **jsdom**.

- First, create a `vitest.config.ts` file in the root of your project (if it doesn't exist already).
- Next, configure **jsdom** as the environment for Vitest.

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Use jsdom as the test environment
    globals: true, // Make global variables like `describe`, `it`, etc., available
    setupFiles: "tests/setup.ts", // Optional setup file
  },
});
```

In this configuration:

- **`environment: 'jsdom'`**: This sets up a browser-like environment for tests.
- **`setupFiles`**: You can include a setup file for any global configurations (like extending matchers from `@testing-library/jest-dom`).
- **`coverage`**: This configuration is optional, but helps with code coverage reports.

### 4. **Set Up the Vitest Setup File**

If you need to extend Jest matchers (like `.toBeInTheDocument()`), you should create a `setup.ts` file.

```ts
// vitest.setup.ts
import "@testing-library/jest-dom"; // For better assertions
```

This file will be executed before each test file runs, ensuring that all necessary utilities are available.

Then inside the **tsconfig.json** file paste the global types

```json

 "compilerOptions": {
    "types": ["vitest/globals"]
  }
```
