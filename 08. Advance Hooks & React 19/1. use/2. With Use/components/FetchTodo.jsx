import { use } from "react";
// npm i react@experimental react-dom@experimental

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

const FetchTodo = () => {
  const data = use(fetchData());
  return <h1>{data.title}</h1>;
};

export default FetchTodo;
