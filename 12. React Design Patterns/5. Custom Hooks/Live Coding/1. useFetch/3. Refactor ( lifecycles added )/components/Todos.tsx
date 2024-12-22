import useFetch from "../hooks/useFetch";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [data, loading, error] = useFetch<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching todos: {error.message}</p>;
  }

  return (
    <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
  );
};

export default Todos;
