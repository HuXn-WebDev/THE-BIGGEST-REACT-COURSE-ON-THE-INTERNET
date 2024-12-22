# React Challenge: Build a Modal Component Using the Compound Component Design Pattern

Your task is to build a modal component using the **Compound Component** design pattern in React.

You’ll need to implement the following features:

- A modal container that can house multiple child components.
- A way to control the visibility of the modal.
- A **title**, **body**, and **footer** area within the modal that can be customized with content passed as children.

### Steps to Complete the Challenge

#### Step 1: **Set Up the Modal Component**

First, create a parent `Modal` component that will act as the container for the modal's content.

1. **Create the `Modal.tsx` file**: This component should render the modal's layout (a centered box with a dark overlay) and accept child content.
2. The modal should use the `children` prop to render its inner content.
3. Add styles to position the modal in the center of the screen and overlay the background with a semi-transparent black background to obscure other content.

#### Step 2: **Create the Modal Title Component**

Now, create a `ModalTitle` component to handle the title of the modal.

1. **Create the `ModalTitle.tsx` file**.
2. The `ModalTitle` component should accept children content, which will be the title text.
3. Style the title to be bold and prominent, ensuring it stands out at the top of the modal.

#### Step 3: **Create the Modal Body Component**

Next, create a `ModalBody` component to handle the body/content of the modal.

1. **Create the `ModalBody.tsx` file**.
2. The `ModalBody` component should accept children content that will be displayed inside the modal body.
3. Style the body to have a smaller font and a bit of margin to separate it from other sections.

#### Step 4: **Create the Modal Footer Component**

Now, create a `ModalFooter` component to render actions such as buttons inside the footer of the modal.

1. **Create the `ModalFooter.tsx` file**.
2. The `ModalFooter` component should also accept children content, which could be buttons or other elements.
3. Style the footer to align the buttons to the right and provide spacing between them.

#### Step 5: **Compose the Modal in the `App.tsx`**

With the individual modal components created (`Modal`, `ModalTitle`, `ModalBody`, `ModalFooter`), it’s time to bring everything together.

1. **Import the modal components** into the `App.tsx` file.
2. Use the modal in the application, conditionally rendering it when the state is toggled (i.e., opening and closing the modal).
3. Pass the `ModalTitle`, `ModalBody`, and `ModalFooter` components inside the main `Modal` component, just like shown in the example.
