import FadeInComponent from "./components/1. FadeInComponent";
import SlidingMenu from "./components/2. SlidingMenu";
import Tooltip from "./components/3. Tooltip";
import ToggleSwitch from "./components/4. ToggleSwitch";
import DynamicList from "./components/5. DynamicList";

const App = () => {
  return (
    <section
      className="h-screen flex justify-center
     items-center bg-[#0d1017]"
    >
      {/* <FadeInComponent /> */}
      {/* <SlidingMenu /> */}
      {/* <Tooltip /> */}
      {/* <ToggleSwitch /> */}
      <DynamicList />
    </section>
  );
};

export default App;
