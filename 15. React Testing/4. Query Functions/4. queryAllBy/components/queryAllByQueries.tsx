const QueryAllByQueries = () => {
  return (
    <div>
      <button>Click Me 1</button>
      <button>Click Me 2</button>
      <div role="alert">Alert Message 1</div>
      <div role="alert">Alert Message 2</div>
      <section role="region">Region 1</section>
      <section role="region">Region 2</section>

      <label htmlFor="input1">Label 1</label>
      <input id="input1" placeholder="Enter text here" />
      <label htmlFor="input2">Label 2</label>
      <input id="input2" placeholder="Enter text here" />
      <label htmlFor="input3">Label 3</label>
      <input id="input3" placeholder="Enter text here" />

      <input placeholder="Search" />
      <input placeholder="Search" />
      <input placeholder="Email" />
      <input placeholder="Search" />

      <h1>Header Text 1</h1>
      <h1>Header Text 2</h1>
      <p>This is some paragraph text 1.</p>
      <p>This is some paragraph text 2.</p>

      <div data-testid="custom-element">Custom Test Element 1</div>
      <div data-testid="custom-element">Custom Test Element 2</div>

      <input value="Pre-filled Text 1" />
      <input value="Pre-filled Text 2" />
      <input value="Pre-filled Text 1" />
    </div>
  );
};

export default QueryAllByQueries;
