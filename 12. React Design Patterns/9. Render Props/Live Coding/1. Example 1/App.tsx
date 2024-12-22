import Counter from "./components/Counter";

const App = () => {
  return (
    <Counter render={(count: number) => <p>The current count is: {count}</p>} />
  );
};

export default App;
