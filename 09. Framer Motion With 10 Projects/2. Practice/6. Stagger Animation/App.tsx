import StaggeredList from "./components/1. StaggeredList";
import StaggeredImageGallery from "./components/2. StaggeredImageGallery";
import StaggeredButtonPress from "./components/3. StaggeredButtonPress";
import StaggeredGridLayout from "./components/4. StaggeredGridLayout";
import StaggeredTextReveal from "./components/5. StaggeredTextReveal";

const App = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-[#0d1017]">
      {/* <StaggeredList /> */}
      {/* <StaggeredImageGallery /> */}
      {/* <StaggeredButtonPress /> */}
      {/* <StaggeredGridLayout /> */}
      <StaggeredTextReveal />
    </section>
  );
};

export default App;
