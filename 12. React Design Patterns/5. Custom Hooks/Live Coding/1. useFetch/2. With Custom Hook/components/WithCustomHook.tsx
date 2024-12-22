import React from "react";
import useFetch from "../hooks/useFetch";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const WithCustomHook: React.FC = () => {
  const [data] = useFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => (
          <ul key={item.id}>
            <li>{item.title}</li>
          </ul>
        ))}
    </>
  );
};

export default WithCustomHook;
