import { FaTimes } from "react-icons/fa";
import { useStore } from "../store";

const Modal = () => {
  const {
    isListModalOpen,
    isWorkspaceModalOpen,
    modalName,
    modalEmoji,
    modalType,
    setModalName,
    setModalEmoji,
    handleSaveModal,
    closeListModal,
    closeWorkspaceModal,
  } = useStore();

  const handleClose = () => {
    if (modalType === "List") {
      closeListModal();
    } else if (modalType === "Workspace") {
      closeWorkspaceModal();
    }
  };

  const handleSave = () => {
    handleSaveModal();
  };

  if (!isListModalOpen && !isWorkspaceModalOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center
     justify-center bg-gray-900 bg-opacity-50 z-50"
    >
      <div className="bg-white p-6 rounded-lg w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{`Create New ${modalType}`}</h2>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <FaTimes />
          </button>
        </div>
        <input
          type="text"
          value={modalName}
          onChange={(e) => setModalName(e.target.value)}
          placeholder={`Enter ${modalType} name`}
          className="border border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <input
          type="text"
          value={modalEmoji}
          onChange={(e) => setModalEmoji(e.target.value)}
          placeholder="Enter emoji (optional)"
          className="border border-gray-300 p-2 rounded-lg w-full mb-4"
        />
        <button
          onClick={handleSave}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Modal;
