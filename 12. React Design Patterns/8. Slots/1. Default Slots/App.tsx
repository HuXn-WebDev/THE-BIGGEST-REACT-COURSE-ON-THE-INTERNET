import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card>
        {/* Default Slots (Anonymous Slots) */}
        <h1>This is my Card Title</h1>
        <p>This is my card content</p>
        <button>Learn More</button>
      </Card>
    </div>
  );
};

export default App;
