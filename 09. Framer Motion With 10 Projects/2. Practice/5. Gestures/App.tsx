import SwipeableCard from "./components/1. SwipeableCard";
import DraggableBox from "./components/2. DraggableBox";
import RotateOnDrag from "./components/3. RotateOnDrag";
import TapToChangeColor from "./components/4. TapToChangeColor";
import LongPressToChangeSize from "./components/5. LongPressToChangeSize";
import GestureBasedImageGallery from "./components/6. GestureBasedImageGallery";

const App = () => {
  return (
    <section
      className="h-screen flex justify-center
     items-center bg-[#0d1017]"
    >
      {/* <SwipeableCard /> */}
      {/* <DraggableBox /> */}
      {/* <RotateOnDrag /> */}
      {/* <TapToChangeColor /> */}
      {/* <LongPressToChangeSize /> */}
      <GestureBasedImageGallery />
    </section>
  );
};

export default App;
