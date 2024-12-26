const FindingElementsByRole = () => {
  return (
    <div>
      {/* ARIA: Link */}
      <a href="/">Link</a>
      {/* ARIA: Button */}
      <button>Button</button>
      {/* ARIA: ContentInfo */}
      <footer>ContentInfo</footer>
      {/* ARIA: Heading */}
      <h1>Heading</h1>
      {/* ARIA: Banner */}
      <header>Banner</header>
      {/* ARIA: Img */}
      <img alt="description" /> Img
      {/* ARIA: Checkbox */}
      <input type="checkbox" /> Checkbox
      {/* ARIA: Spinbutton */}
      <input type="number" /> Spinbutton
      {/* ARIA: Radio */}
      <input type="radio" /> Radio
      {/* ARIA: Textbox */}
      <input type="text" /> Text
      {/* ARIA: List */}
      <ul>Listitem</ul>
      {/* ARIA: ListItem */}
      <li>List</li>
      {/* --------------------- */}
      <button>Learn More</button>
      <button>Submit</button>
    </div>
  );
};

export default FindingElementsByRole;
