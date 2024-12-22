### **Challenge: Dynamic Component Factory with Advanced Configuration**

Create a `ComponentFactory` that dynamically generates different UI components based on specific configurations, and ensures type safety for each component's configuration.

#### **Requirements:**

1. **Define Several Components:**

   - Create a few different components with varying configurations. For example:
     - A `Button` component with properties such as `label`, `onClick`, and `disabled`.
     - A `Card` component that has a `title`, `content`, and `footer`.
     - A `Modal` component that takes `header`, `content`, and `footer`.

2. **Define a `ComponentConfig` Interface:**

   - Create an interface `ComponentConfig` that will define a structure for the component configuration. The `ComponentConfig` interface should be generic and accept different configurations based on the component type.

3. **Implement the Factory:**

   - Create a `ComponentFactory` function that takes a `ComponentConfig` object and dynamically creates the corresponding component based on the configuration.
   - The factory should enforce type safety. For instance, when generating a `Button` component, it should validate that only the correct properties are passed (e.g., `label`, `onClick`, `disabled`).

4. **Dynamic Rendering:**

   - Ensure that the `ComponentFactory` can render the correct component based on the configuration at runtime.
   - The configuration should be passed into the factory, and based on the type (e.g., `Button`, `Card`, `Modal`), the correct component should be rendered.
