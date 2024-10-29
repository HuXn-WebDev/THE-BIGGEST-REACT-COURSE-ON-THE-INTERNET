import DraggableBox from "./components/1. DraggableBox";
import HoverLinkedScale from "./components/2. HoverLinkedScale";
import SpringAnimatedPosition from "./components/3. SpringAnimatedPosition";
import DynamicRotation from "./components/4. DynamicRotation";

const App = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-[#0d1017]">
      {/* <DraggableBox /> */}
      {/* <HoverLinkedScale /> */}
      {/* <SpringAnimatedPosition /> */}
      <DynamicRotation />
    </section>
  );
};

export default App;
