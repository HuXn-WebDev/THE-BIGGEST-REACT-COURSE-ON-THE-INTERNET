// Adding Style

// 1. use double curly braces {{property: value}}
// you'd also need to use camelCase convention for styling.

// const App = () => {
//   return (
//     <section>
//       <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
//         Inline Style
//       </h1>
//     </section>
//   );
// };

// 2. Seperate Styles and then interpolate it.
const App = () => {
  const styles = { color: "white", backgroundColor: "teal", padding: "2rem" };

  return (
    <section>
      <h1 style={styles}>Inline Style</h1>
    </section>
  );
};

export default App;
