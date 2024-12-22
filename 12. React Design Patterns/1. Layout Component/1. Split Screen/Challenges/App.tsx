import Header from "./components/Header";
import Footer from "./components/Footer";
import SplitScreen from "./components/SplitScreen";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Layout */}
      <SplitScreen leftWeight={3} rightWeight={60}>
        <Sidebar />
        <Content />
      </SplitScreen>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
