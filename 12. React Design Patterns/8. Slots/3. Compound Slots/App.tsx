import Card from "./components/Card";
import CardButton from "./components/CardButton";

const App = () => {
  return (
    <div>
      <Card.Title>
        <h1>Card Title</h1>
      </Card.Title>
      <Card.Content>
        <p>Card Content</p>
      </Card.Content>
      <CardButton>
        <button>Click Me</button>
      </CardButton>
    </div>
  );
};

export default App;
