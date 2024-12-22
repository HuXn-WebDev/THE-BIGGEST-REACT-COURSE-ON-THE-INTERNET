import axios from "axios";
import { useEffect, useState } from "react";

export const withTodo = (Component: any, todoId: string) => {
  return (props: any) => {
    const [todo, setTodo] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        setTodo(response.data);
      })();
    }, []);

    return <Component {...props} todo={todo} />;
  };
};
