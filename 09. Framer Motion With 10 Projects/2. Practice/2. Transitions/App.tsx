import FadeComponent from "./components/1. FadeComponent";
import Sidebar from "./components/2. Sidebar";
import Modal from "./components/3. Modal";
import ResponsiveButton from "./components/4. ResponsiveButton";
import Accordion from "./components/5. Accordion";
import ToastNotification from "./components/6. ToastNotification";

const App = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-[#0d1017]">
      {/* <FadeComponent /> */}
      {/* <Sidebar /> */}
      {/* <Modal /> */}
      {/* <ResponsiveButton /> */}
      {/* <Accordion /> */}
      <ToastNotification />
    </section>
  );
};

export default App;
