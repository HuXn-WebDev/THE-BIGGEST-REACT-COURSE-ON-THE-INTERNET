import { MyProvider } from "./context/MyContext";
import { SlotComponent } from "./components/SlotComponent";
import { SlotContent } from "./components/SlotContent";

const App = () => {
  return (
    <MyProvider>
      <SlotComponent>
        <SlotContent />
      </SlotComponent>
    </MyProvider>
  );
};

export default App;
