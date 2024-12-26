const FindByQueries = () => {
  return (
    <div>
      <h1>FindBy Queries Test</h1>
      <p>Paragraph with text "Hello World"</p>
      <button aria-label="click-me">Click me</button>
      <input placeholder="Enter text here" />
      <img src="image.jpg" alt="test-image" />
      <input defaultValue="This is a test input" />
      <div data-testid="test-element">Test element by test ID</div>
      <label htmlFor="test-input">Test Input Label</label>
      <input id="test-input" placeholder="Test placeholder" />
    </div>
  );
};

export default FindByQueries;
