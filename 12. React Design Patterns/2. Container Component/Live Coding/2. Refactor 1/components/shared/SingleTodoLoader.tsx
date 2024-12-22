import React, { useEffect, useState, ReactNode } from "react";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface SingleTodoLoaderProps {
  children: ReactNode;
  todoId: string;
}

interface ChildComponentProps {
  todos: Todo | null;
}

const SingleTodoLoader = ({ todoId, children }: SingleTodoLoaderProps) => {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      setTodo(response.data);
    })();
  }, [todoId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ChildComponentProps>(child)) {
          return React.cloneElement(child, {
            todo,
          });
        }
        return child;
      })}
    </>
  );
};

export default SingleTodoLoader;
