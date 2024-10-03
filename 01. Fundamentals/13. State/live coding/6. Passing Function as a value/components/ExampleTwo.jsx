import { useState } from "react";

const ExampleTwo = () => {
  // Initialize state with a function that generates a random number
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const generateNewRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
  };

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={generateNewRandomNumber}>Generate New Number</button>
    </div>
  );
};

export default ExampleTwo;
