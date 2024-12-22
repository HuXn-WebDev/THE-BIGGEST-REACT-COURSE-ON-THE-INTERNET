import React, { useEffect, useState, ReactNode } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: string;
}

interface SingleTodoLoaderProps {
  children: ReactNode;
}

interface ChildComponentProps {
  todos: Todo | null;
}

const SingleTodoLoader = ({ children }: SingleTodoLoaderProps) => {
  const [todos, setTodos] = useState<Todo | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get<Todo>(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setTodos(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ChildComponentProps>(child)) {
          return React.cloneElement(child, {
            todos,
          });
        }
        return child;
      })}
    </>
  );
};

export default SingleTodoLoader;
