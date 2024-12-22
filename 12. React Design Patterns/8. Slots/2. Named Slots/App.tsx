import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
        // Named Slots 👇
        cardTitle={<h1>This is my Card Title</h1>}
        cardContent={<p>This is my card content</p>}
        cardButton={<button>Learn More</button>}
      />
    </div>
  );
};

export default App;
