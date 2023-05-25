// I'M GONNA GIVE YOU A FEW EXAMPLE BUT THERE IS A LOT MORE TO IT,
// EXPLORE IT BY YOURSELF 🥂

// In this video I'm gonna give you the practice of functional component
// BUT you're totally free to work with class based components as well 🥂

// ------------------  Example 1 (IF) ------------------

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) => {
//   if (isValid) {
//     return <ValidPassword />;
//   }
//   return <InvalidPassword />;
// };

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   );
// };

// ------------------  Example 2 (&&) ------------------

// function Cart() {
//   const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];

//   return (
//     <>
//       <h1>Cart 🛒</h1>
//       {items.length > 0 && <h2>You have {items.length} items in your Cart.</h2>}

//       <ul>
//         <h4> 👇Products </h4>
//         {items.map((item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// const App = () => <Cart />;

// ------------------ Example 3 (Ternary Operator) ------------------
// condition ? true : false

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) =>
  isValid ? <ValidPassword /> : <InvalidPassword />;

const App = () => {
  return (
    <section>
      <Password isValid={true} />
    </section>
  );
};

export default App;
