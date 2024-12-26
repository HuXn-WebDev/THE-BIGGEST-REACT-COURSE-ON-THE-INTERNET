const QueryByQueries = () => {
  return (
    <div>
      <button>Click Me</button>
      <div role="alert">Alert Message</div>
      <section role="region">Region</section>

      <label htmlFor="input1">Label 1</label>
      <input id="input1" placeholder="Enter text here" />
      <label htmlFor="input2">Label 2</label>
      <input id="input2" placeholder="Enter text here" />

      <input placeholder="Search" />
      <input placeholder="Email" />

      <h1>Header Text</h1>
      <p>This is some paragraph text.</p>

      <div data-testid="custom-element">Custom Test Element</div>

      <input value="Pre-filled Text" />
    </div>
  );
};

export default QueryByQueries;
