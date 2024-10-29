import OtherComponent from "./OtherComponent";
import { useCounterStore } from "./store";

const App = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <OtherComponent />
    </div>
  );
};

export default App;
