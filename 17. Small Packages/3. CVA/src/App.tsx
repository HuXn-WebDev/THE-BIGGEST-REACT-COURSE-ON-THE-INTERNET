import Button from "./components/Button";

const App = () => {
  return (
    <div className="space-y-4">
      <Button color="primary" size="large">
        Primary Large Button
      </Button>
      <Button color="secondary" size="small">
        Secondary Small Button
      </Button>
      <Button color="primary" state="disabled" size="small">
        Disabled Button
      </Button>
    </div>
  );
};

export default App;
