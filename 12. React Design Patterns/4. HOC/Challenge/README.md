### Challenge: **Create a HOC for Access Control and Dynamic Prop Injection**

You need to implement an HOC that does two things:

1. **Access Control**: The HOC should accept a `roles` prop, which is an array of allowed roles. The HOC should check if the user has the required roles, and if not, it should display a fallback component (like a "Not Authorized" message or redirect to a different page).
2. **Dynamic Prop Injection**: The HOC should also be able to inject dynamic props into the wrapped component based on conditions. For example, based on the user's role, the HOC should inject additional props into the wrapped component (e.g., special content or features based on role).

#### Requirements:

- You need to define the types for the component's props and the HOC in TypeScript.
- The HOC should be flexible to handle any type of component, with the ability to inject custom props.
- Handle default props and dynamic prop injection based on roles.
- Make sure that TypeScript ensures proper type safety throughout the code.
- Implement the `roles` prop properly, ensuring that the injected component only renders for users with the correct roles.
