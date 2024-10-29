import Box from "./components/1. Box";
import BouncingCircle from "./components/2. BouncingCircle";
import SpinningIcon from "./components/3. SpinningIcon";
import SkewRectangle from "./components/4. SkewRectangle";
import ComplexAnimation from "./components/5. ComplexAnimation";
import SequentialBoxes from "./components/6. SequentialBoxes";

const App = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-[#0d1017]">
      {/* <Box /> */}
      {/* <BouncingCircle /> */}
      {/* <SpinningIcon /> */}
      {/* <SkewRectangle /> */}
      {/* <ComplexAnimation /> */}
      <SequentialBoxes />
    </section>
  );
};

export default App;
