import { printProps } from "./utils/printProps";
import TodoList from "./components/TodoList";

const TodoListWrapped = printProps(TodoList);

const App = () => {
  return (
    <div>
      <TodoListWrapped a={1} b="hello" c={{ name: "huxn" }} />
    </div>
  );
};

export default App;
