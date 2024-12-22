interface Todo {
  id: number;
  title: string;
  completed: string;
}

interface TodoListProps {
  todos: Todo | null;
}

const TodoList = ({ todos }: TodoListProps) => {
  const { id, title } = todos || {};

  return todos ? (
    <div>
      <p>
        <strong>Todo ID:</strong> {id}
      </p>
      <h1>
        <strong>Todo Title:</strong> {title}
      </h1>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default TodoList;
