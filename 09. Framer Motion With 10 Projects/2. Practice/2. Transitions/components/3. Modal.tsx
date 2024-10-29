import { useState } from "react";
import { motion } from "framer-motion";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-white p-4 rounded"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "-100vh" }}
            animate={{ y: "0vh" }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-bold">Modal Title</h2>
            <p>This is a modal window!</p>
            <button
              className="mt-4 p-2 bg-red-500 text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Modal;
