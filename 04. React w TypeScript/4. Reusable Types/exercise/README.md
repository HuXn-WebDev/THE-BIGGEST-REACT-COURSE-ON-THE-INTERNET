# Reusable Props Typing

## Objective

In this exercise, you'll practice creating reusable prop types in TypeScript. You will define a set of reusable props for different types of user information and then apply them to multiple React components.

### Step 1: Define Reusable Types

1. **Create a file named `types.ts` in the `src` directory.**

2. **Define a base `Info` type and an extended `AdminInfoList` type in `types.ts`:**

   - **`Info` Type**: This type represents the base information shared by all users. It includes essential properties that any user will have like (id, name, email).

### Step 2: Create `UserInfo` Component

1. **Create a new file named `UserInfo.tsx` in the `src` directory.**

2. **Create a `UserInfo` component that displays user information based on the `Info` type:**

### Step 3: Create `AdminInfo` Component

1. **Create a new file named `AdminInfo.tsx` in the `src` directory.**

2. **Create an `AdminInfo` component that displays user information and additional admin details based on the `AdminInfoList` type:**

### Step 5: Use the Components in `App`

1. **Open `App.tsx` (or create a new component if you prefer).**

2. **Import and use the `UserInfo` and `AdminInfo` components, passing the appropriate props**
