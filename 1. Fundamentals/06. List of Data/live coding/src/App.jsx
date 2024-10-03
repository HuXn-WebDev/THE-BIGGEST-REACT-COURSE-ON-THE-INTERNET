// Let's iterate over lists and render them to the DOM.

// Example 1
// const App = () => {
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <main>
//       {numbers.map((number) => (
//         <ul key={Math.random()}>
//           <li>{number}</li>
//         </ul>
//       ))}
//     </main>
//   );
// };

// Example 2
// const App = () => {
//   const usersInfo = [
//     {
//       username: "HuXn",
//       email: "test@gmail.com",
//       location: "USA",
//     },
//     {
//       username: "John",
//       email: "jd@gmail.com",
//       location: "Arab",
//     },
//     {
//       username: "Alex",
//       email: "alexmersion@gmail.com",
//       location: "India",
//     },
//   ];

//   return (
//     <section>
//       {usersInfo.map((user) => (
//         <ul key={Math.random()}>
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//         </ul>
//       ))}
//     </section>
//   );
// };

// Example 3
import "./Shopping.css";

const Shopping = ({ items }) => {
  return (
    <section>
      <ol>
        {items.map((item) => (
          <li key={Math.random() * 5}>{item}</li>
        ))}
      </ol>
    </section>
  );
};

const App = () => {
  return (
    <section>
      <Shopping
        items={["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"]}
      />
    </section>
  );
};

export default App;
