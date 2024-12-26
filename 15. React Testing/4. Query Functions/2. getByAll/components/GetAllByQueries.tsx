const GetAllByQueries = () => {
  return (
    <div>
      <label htmlFor="input1">Label for Input 1</label>
      <input
        id="input1"
        placeholder="Enter text here"
        value="Default Value"
        disabled
      />

      <label htmlFor="input2">Label for Input 2</label>
      <input
        id="input2"
        placeholder="Another placeholder"
        value="Another value"
        disabled
      />

      <input placeholder="Enter something..." disabled />
      <input placeholder="Enter something else..." disabled />

      <p>This is a paragraph with some text content.</p>
      <p>This is a paragraph with some text content.</p>

      <input value="Some display value" disabled />
      <input value="Another display value" disabled />

      <img src="image1.png" alt="A sample image" />
      <img src="image2.png" alt="Another sample image" />

      <div title="This is a div with a title attribute">
        Div content with a title attribute
      </div>
      <div title="Another div with a title attribute">Another div content</div>

      <button role="button" aria-label="This is a button" disabled>
        Disabled Button 1
      </button>
      <button role="button" aria-label="This is a button" disabled>
        Disabled Button 2
      </button>

      <div data-testid="custom-test-id-1">This div has a test id 1.</div>
      <div data-testid="custom-test-id-2">This div has a test id 2.</div>
    </div>
  );
};

export default GetAllByQueries;
