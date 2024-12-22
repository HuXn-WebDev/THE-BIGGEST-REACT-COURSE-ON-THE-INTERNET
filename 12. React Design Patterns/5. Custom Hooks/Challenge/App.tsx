import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";
import useForm from "./hooks/useForm";
import useDebounce from "./hooks/useDebounce";
import usePrevious from "./hooks/usePrevious";

const App = () => {
  const [storedValue, setStoredValue] = useLocalStorage("username", "");

  const { data, loading, error } = useFetch<any>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const { values, handleChange, handleSubmit } = useForm({
    username: "",
    email: "",
  });

  const [inputValue, setInputValue] = useState("");
  const debouncedInput = useDebounce(inputValue, 500);

  const previousValue = usePrevious(inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App p-4">
      <h1 className="text-3xl mb-4">Custom Hooks in Action</h1>

      <div className="mb-4">
        <h2 className="text-xl">Form Handling Example</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="border p-2 mb-2"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            className="border p-2 mb-2"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button type="submit" className="border p-2">
            Submit
          </button>
        </form>
      </div>

      <div className="mb-4">
        <h2 className="text-xl">Debounced Input Example</h2>
        <input
          className="border p-2"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type to debounce"
        />
        <p>Debounced Value: {debouncedInput}</p>
        <p>Previous Value: {previousValue}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl">Local Storage Example</h2>
        <input
          className="border p-2"
          type="text"
          value={storedValue}
          onChange={(e) => setStoredValue(e.target.value)}
          placeholder="Set Local Storage"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-xl">Fetch Data Example</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default App;
