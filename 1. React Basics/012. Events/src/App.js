// Example 1
// const Button = () => {
//   // const handleClick = () => console.log("You Clicked Me");
//   const handleClick = () => console.log(Math.round(Math.random() * 10));
//   return <button onClick={handleClick}>Click</button>;
// };

// Example 2
// const Copy = () => {
//   function copyHandler() {
//     console.log("Stop Stealing My Content.");
//   }

//   return (
//     <p onCopy={copyHandler}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//       voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
//       laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
//       eveniet voluptates suscipit.
//     </p>
//   );
// };

// Example 3
const Move = () => {
  function moveHandler() {
    alert("Mouse Move Event Fired");
    console.log("Mouse Move Event Fired");
  }

  return (
    <p onMouseOver={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
      voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
      laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
      eveniet voluptates suscipit.
    </p>
  );
};

const App = () => {
  // return <Button />;
  // return <Copy />;
  return <Move />;
};

export default App;
