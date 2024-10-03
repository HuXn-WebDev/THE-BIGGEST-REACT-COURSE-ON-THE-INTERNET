import ContactForm from "./components/ContactForm";
import EventHandling from "./components/EventHandling";
import FocusInput from "./components/FocusInput";

const App: React.FC = () => {
  return (
    <div>
      <FocusInput />
      <ContactForm />
      <EventHandling />
    </div>
  );
};

export default App;
