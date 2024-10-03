import { useState, useEffect } from "react";

const ExampleThree = () => {
  // Initialize state from localStorage or default to an empty string
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  // Update localStorage whenever the name changes
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default ExampleThree;
