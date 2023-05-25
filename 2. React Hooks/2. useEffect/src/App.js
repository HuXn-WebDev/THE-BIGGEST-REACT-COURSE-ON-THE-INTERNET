// We setup useEffect hook to run some code WHEN
//  👉 Component renderes for the (First Time)
//  👉  & WHENEVER it re-renders
//  👉  & some data in our component changed.

import { useEffect, useState } from "react";

// 1. Without the empty array
// const App = () => {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     console.log("call useEffect");
//     document.title = `Increment (${value})`;
//   });

//   return (
//     <>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </>
//   );
// };

// 2. useEffect - Conditional
// You cannot wrap hook with conditional statment
// If you want logic you'll have to put it inside your hook.
// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("call useEffect");
//     if (value > 0) {
//       document.title = `Increment (${value})`;
//     }
//   });

//   return (
//     <>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </>
//   );
// };

// 3. useEffect - Dependency List
// empty array means (it will ONLY run on inital render)
// passing value to array means (it will re-render when that value changed)
// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("call useEffect");
//     if (value > 0) {
//       document.title = `Increment (${value})`;
//     }
//   }, [value]);

//   return (
//     <>
//       <h2>{value}</h2>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </>
//   );
// };

// The cleanup can prevent memory leaks and remove unwanted things. Some use-cases for this are:

// Clean up subscriptions
// Clean up modals
// Remove event listeners
// Clear timeouts
// const App = () => {
//   const [size, setSize] = useState(window.innerWidth);
//   console.log(size);

//   const checkSize = () => setSize(window.innerWidth);

//   useEffect(() => {
//     window.addEventListener("resize", checkSize);
//     return () => {
//       // Before we add render our component again
//       // this cleanup function will cleanup the component first.
//       console.log("cleanup");
//       window.removeEventListener("resize", checkSize);
//     };
//   });

//   return (
//     <>
//       <h2>window</h2>
//       <h2>{size}px</h2>
//     </>
//   );
// };

// Fetching Data from 3rd party
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={Math.random()}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
