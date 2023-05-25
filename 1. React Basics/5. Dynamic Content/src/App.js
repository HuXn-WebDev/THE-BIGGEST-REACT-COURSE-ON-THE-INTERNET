// ********** Embedding Dynamic Content **********

const App = () => {
  const myName = "HuXn WebDev";
  const multiply = (a, b) => a + b;
  const specialClass = "simple-class";

  return (
    <section>
      {/* Rendering Variable Value */}
      <h1>{myName}</h1>
      {/* Rendering Expression */}
      <p>2 + 2 = {2 + 2}</p>
      {/* Rendering Array */}
      <p>My Friends List: {["Alex", "John", "Waheed", "Jordan"]}</p>
      {/* Rendering Function Value */}
      <p>2 * 2 = {multiply(2, 2)}</p>
      {/* Rendering Class */}
      <p className={specialClass}>This is special class</p>
    </section>
  );
};

export default App;
