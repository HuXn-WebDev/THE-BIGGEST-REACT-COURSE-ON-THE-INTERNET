import ModalTitle from "./ModalTitle";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[20rem]">{children}</div>
    </div>
  );
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
