import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

const App = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <h1>My Amazing Modal</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
