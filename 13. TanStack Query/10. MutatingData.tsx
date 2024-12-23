import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

const postTodo = async (newTodo: Todo) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const MutateData = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");

  const { mutate, error, status } = useMutation<Todo>({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error) => {
      console.error("Error posting todo:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "") return;

    mutate({ title, completed: false });
    setTitle("");
  };

  return (
    <div>
      <h1>Create New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />
        <button type="submit" disabled={status === "pending"}>
          {status === "pending" ? "Adding..." : "Add Todo"}
        </button>
        {error && <div>An error occurred: {error.message}</div>}
        {status === "success" && <div>Todo added successfully!</div>}
      </form>
    </div>
  );
};

export default MutateData;
