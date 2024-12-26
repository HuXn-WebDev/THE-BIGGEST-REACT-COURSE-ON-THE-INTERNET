const FindAllByQueries = () => {
  return (
    <div>
      <h1>FindAllBy Queries Test</h1>

      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>

      <button aria-label="click-me">Click me 1</button>
      <button aria-label="click-me">Click me 2</button>
      <button aria-label="click-me">Click me 3</button>

      <input placeholder="Enter text here" />
      <input placeholder="Enter text here" />
      <input placeholder="Enter text here" />

      <img src="image1.jpg" alt="test-image" />
      <img src="image2.jpg" alt="test-image" />
      <img src="image3.jpg" alt="test-image" />

      <input defaultValue="Test input 1" />
      <input defaultValue="Test input 2" />
      <input defaultValue="Test input 3" />

      <div data-testid="test-element">Test element 1</div>
      <div data-testid="test-element">Test element 2</div>
      <div data-testid="test-element">Test element 3</div>
    </div>
  );
};

export default FindAllByQueries;
