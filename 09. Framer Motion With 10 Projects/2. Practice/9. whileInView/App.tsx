import StaggeredList from "./components/1. StaggeredList";
import CardFlip from "./components/2. CardFlip";
import TimelineAnimation from "./components/3. TimelineAnimation";
import InteractiveCards from "./components/4. InteractiveCards";

const App = () => {
  return (
    <section className="h-[150rem] flex justify-center items-center bg-[#0d1017]">
      {/* <StaggeredList /> */}
      {/* <CardFlip /> */}
      {/* <TimelineAnimation /> */}
      <InteractiveCards />
    </section>
  );
};

export default App;
