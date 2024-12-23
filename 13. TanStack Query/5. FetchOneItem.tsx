import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchTodo = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const FetchOneItem = () => {
  const [currentId, setCurrentId] = useState(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["todo", currentId],
    queryFn: () => fetchTodo(currentId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const handleNextClick = () => {
    setCurrentId((prevId) => prevId + 1);
  };

  return (
    <div>
      <h1>Todo</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleNextClick}>Next Todo</button>
    </div>
  );
};

export default FetchOneItem;
