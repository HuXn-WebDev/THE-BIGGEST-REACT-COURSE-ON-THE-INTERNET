import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchTodo = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const RefetchInterval = () => {
  const [currentId, setCurrentId] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["todo", currentId],
    queryFn: () => fetchTodo(currentId),
    refetchInterval: 5000,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Todo</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button
        onClick={() =>
          setCurrentId((prevId) => (prevId < 200 ? prevId + 1 : 1))
        }
      >
        Next Todo
      </button>
    </div>
  );
};

export default RefetchInterval;
