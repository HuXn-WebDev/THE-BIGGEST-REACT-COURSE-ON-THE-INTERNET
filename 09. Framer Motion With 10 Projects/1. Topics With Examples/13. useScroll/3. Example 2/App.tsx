import AnimationComponent from "./components/ScrollSections";

const App = () => {
  return (
    <div>
      <AnimationComponent />
      <div className="h-[200vh] bg-gray-800 flex items-center justify-center">
        <h2 className="text-white">Scroll Down</h2>
      </div>
    </div>
  );
};

export default App;
