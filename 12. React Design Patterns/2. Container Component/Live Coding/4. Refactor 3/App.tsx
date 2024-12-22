import axios from "axios";
import DataSource from "./components/shared/DataSource";
import CommentsList from "./components/CommentsList";
import TodoList from "./components/TodoList";

const getServerData = (url: string) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <div>
      <DataSource
        getDataFunc={getServerData(
          "https://jsonplaceholder.typicode.com/todos/1"
        )}
        resourceName="todo"
      >
        <TodoList />
      </DataSource>

      <br />

      <DataSource
        getDataFunc={getServerData(
          "https://jsonplaceholder.typicode.com/comments/1"
        )}
        resourceName="comments"
      >
        <CommentsList />
      </DataSource>
    </div>
  );
};

export default App;
