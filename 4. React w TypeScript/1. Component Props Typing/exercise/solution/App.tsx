import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button
        label="Click"
        onClick={() => console.log("clicked")}
        disabled={false}
      />
    </div>
  );
};

export default App;
