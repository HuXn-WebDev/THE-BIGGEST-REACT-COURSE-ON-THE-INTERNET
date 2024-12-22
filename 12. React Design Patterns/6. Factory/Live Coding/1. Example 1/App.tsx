import ButtonFactory from "./shared/ButtonFactory";

const App = () => {
  const buttonType = "primary";
  const buttonLabel = "Click Me";

  return <div>{ButtonFactory(buttonType, buttonLabel)}</div>;
};

export default App;
