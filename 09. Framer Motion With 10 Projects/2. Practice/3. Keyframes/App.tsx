import BouncingBall from "./components/1. BouncingBall";
import PulsatingButton from "./components/2. PulsatingButton";
import ColorChangeSquare from "./components/3. ColorChangeSquare";
import SlidingText from "./components/4. SlidingText";
import ZigzagAnimation from "./components/5. ZigzagAnimation";
import WaveEffect from "./components/6. WaveEffect";
import AnimatedBackground from "./components/7. AnimatedBackground";

const App = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-[#0d1017]">
      {/* <BouncingBall /> */}
      {/* <PulsatingButton /> */}
      {/* <ColorChangeSquare /> */}
      {/* <SlidingText /> */}
      {/* <ZigzagAnimation /> */}
      {/* <WaveEffect /> */}
      <AnimatedBackground />
    </section>
  );
};

export default App;
