import TodoList from "./components/Details/TodoList";
import SingleTodoLoader from "./components/shared/SingleTodoLoader";

const App = () => {
  return (
    <div>
      <SingleTodoLoader todoId="1">
        <TodoList />
      </SingleTodoLoader>
      <br />

      <SingleTodoLoader todoId="2">
        <TodoList />
      </SingleTodoLoader>
      <br />

      <SingleTodoLoader todoId="3">
        <TodoList />
      </SingleTodoLoader>
      <br />
    </div>
  );
};

export default App;
