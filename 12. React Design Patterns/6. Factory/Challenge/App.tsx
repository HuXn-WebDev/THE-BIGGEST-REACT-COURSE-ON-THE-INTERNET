import ComponentFactory, { ComponentConfig } from "./utils/ComponentFactory";

const buttonConfig: ComponentConfig = {
  type: "button",
  props: {
    label: "Click Me",
    onClick: () => alert("Clicked"),
    disabled: false,
  },
};

const cardConfig: ComponentConfig = {
  type: "card",
  props: {
    title: "Card Title",
    content: "Some content here.",
    footer: "Footer",
  },
};

const App = () => {
  return (
    <div>
      {ComponentFactory(buttonConfig)}
      {ComponentFactory(cardConfig)}
    </div>
  );
};
export default App;
