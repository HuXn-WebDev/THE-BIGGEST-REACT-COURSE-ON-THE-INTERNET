import TodoList from "./components/Details/TodoList";
import SingleTodoLoader from "./components/shared/SingleTodoLoader";

const App = () => {
  return (
    <div>
      <SingleTodoLoader>
        <TodoList />
      </SingleTodoLoader>
    </div>
  );
};

export default App;
