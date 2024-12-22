import MouseTracker from "./components/MouseTracker";

const App = () => {
  return (
    <MouseTracker
      render={(position: any) => (
        <p>
          Mouse is at ({position.x}, {position.y})
        </p>
      )}
    />
  );
};

export default App;
