import { ReactNode } from "react";

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-4 flex justify-end space-x-2">
      <div>{children}</div>
    </div>
  );
};

export default ModalFooter;
