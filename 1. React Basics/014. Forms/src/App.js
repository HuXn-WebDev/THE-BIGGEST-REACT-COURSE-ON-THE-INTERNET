// Controlled Component 👇
// It's convenient to have a JS Function that:
// handles the submission of the form and
// has access to the data the user entered.

// In HTML in general forms has their own state that typically maintain their own state and update it based on user input.
// In react, mutable state is kept in the (state) of components, and only update with setState().

import { useState } from "react";

// Controlled Form Component 👇
const Form = () => {
  const [username, setUsername] = useState("");

  const handleChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`You typed: ${username}`);
    setUsername("");
  };

  return (
    <div>
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

const App = () => <Form />;

export default App;
