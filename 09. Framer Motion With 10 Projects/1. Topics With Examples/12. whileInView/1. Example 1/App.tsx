import AnimatedCard from "./components/AnimatedGallery";

const App = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mb-4">
        Scroll Down to See the Animation
      </h1>
      <div className="h-screen" />
      <AnimatedCard />
    </div>
  );
};
export default App;
