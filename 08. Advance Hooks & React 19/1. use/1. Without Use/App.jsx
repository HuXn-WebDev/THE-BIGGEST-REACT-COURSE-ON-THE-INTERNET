import { Suspense } from "react";
import FetchTodo from "./components/FetchTodo";

const App = () => {
  return (
    <Suspense>
      <FetchTodo />
    </Suspense>
  );
};

export default App;
