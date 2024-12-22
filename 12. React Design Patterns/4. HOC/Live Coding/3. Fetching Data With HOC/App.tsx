import TodoList from "./components/TodoList";
import { withTodo } from "./utils/withTodo";

const TodoListWrapper = withTodo(TodoList, "2");

const App = () => {
  return (
    <div>
      <TodoListWrapper />
    </div>
  );
};

export default App;
