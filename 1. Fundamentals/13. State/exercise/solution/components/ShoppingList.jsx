import { useState } from "react";

const ShoppingList = () => {
  // Initialize state with an empty array
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity) return;

    // Create a new item object
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    // Update the state with the new item
    setItems((prevItems) => [...prevItems, newItem]);

    // Clear input fields
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
