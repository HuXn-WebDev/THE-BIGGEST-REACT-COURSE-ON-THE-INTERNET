interface Todo {
  id: number;
  title: string;
  body: string;
}

interface TodoListProps {
  todo: Todo | null;
}

const TodoList = ({ todo }: TodoListProps) => {
  const { id, title } = todo || {};

  return todo ? (
    <div>
      <p>
        <strong>Post ID:</strong> {id}
      </p>
      <h1>
        <strong>Post Title:</strong> {title}
      </h1>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default TodoList;
