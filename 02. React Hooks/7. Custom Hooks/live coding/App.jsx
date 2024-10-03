// ---------------------------------------------------
// Hooks are reusable functions.
// When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
// Custom Hooks start with "use". Example: useFetch.

// import { useState, useEffect } from "react";

// Typical Code 👇
// const Home = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };
// ---------------------------------------------------

// Now we'll extract the fetching data functionality into new file name (useFetch) and it'll be our custom hook.

// Importing our custom hook 👇
import useFetch from "./useFetch";

const Home = () => {
  // using our custom hook 👇
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <ul key={item.id}>
              <li>{item.title}</li>
            </ul>
          );
        })}
    </>
  );
};

const App = () => {
  return <Home />;
};

export default App;
