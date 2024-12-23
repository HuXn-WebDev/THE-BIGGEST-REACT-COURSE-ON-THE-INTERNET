import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const FetchFromMultipleEndpoints = () => {
  const [currentTodoId, setCurrentTodoId] = useState(1);
  const [currentPostId, setCurrentPostId] = useState(1);

  // Using useQueries to fetch from multiple endpoints
  const results = useQueries({
    queries: [
      {
        queryKey: ["todos"],
        queryFn: fetchTodos,
      },
      {
        queryKey: ["posts"],
        queryFn: fetchPosts,
      },
    ],
  });

  const [todosQuery, postsQuery] = results;

  if (todosQuery.isLoading || postsQuery.isLoading)
    return <div>Loading...</div>;

  if (todosQuery.error || postsQuery.error)
    return (
      <div>
        An error occurred:
        {todosQuery.error?.message || postsQuery.error?.message}
      </div>
    );

  const todosData = todosQuery.data;
  const postsData = postsQuery.data;

  // Handle button clicks to fetch specific todos and posts
  const handleNextTodoClick = () => {
    setCurrentTodoId((prevId) => Math.min(prevId + 1, todosData.length));
  };

  const handleNextPostClick = () => {
    setCurrentPostId((prevId) => Math.min(prevId + 1, postsData.length));
  };

  return (
    <div>
      <h1>Todos</h1>
      <pre>
        {JSON.stringify(
          todosData.find((todo: any) => todo.id === currentTodoId),
          null,
          2
        )}
      </pre>
      <button onClick={handleNextTodoClick}>Next Todo</button>

      <h1>Posts</h1>
      <pre>
        {JSON.stringify(
          postsData.find((post: any) => post.id === currentPostId),
          null,
          2
        )}
      </pre>
      <button onClick={handleNextPostClick}>Next Post</button>
    </div>
  );
};

export default FetchFromMultipleEndpoints;
