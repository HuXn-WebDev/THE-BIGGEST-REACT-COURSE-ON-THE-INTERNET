// Hooks are reusable functions.
// When you have component logic that needs to be used by multiple components,
//  - we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: useFetch.

import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
};
