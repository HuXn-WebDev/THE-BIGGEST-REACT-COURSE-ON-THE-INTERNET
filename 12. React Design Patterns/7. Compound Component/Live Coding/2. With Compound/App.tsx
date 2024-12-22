import Card from "./components/Card";

const App = () => {
  return (
    // <Card title="something cool" content="amazing stuff" footer="and the end" />

    <Card>
      <Card.Title>Something Cool</Card.Title>
      <Card.Content>Amazing Stuff</Card.Content>
      <Card.Footer>And the end</Card.Footer>
    </Card>
  );
};
export default App;
