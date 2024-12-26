const GetByQueries = () => {
  return (
    <div>
      <h1>MyComponent</h1>
      <button aria-label="submit">Submit</button>
      <button id="cancel-button">Cancel</button>
      <input type="text" placeholder="Enter text" />
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Visit Example
      </a>
      <div data-testid="custom-element">Custom Element</div>
    </div>
  );
};

export default GetByQueries;
