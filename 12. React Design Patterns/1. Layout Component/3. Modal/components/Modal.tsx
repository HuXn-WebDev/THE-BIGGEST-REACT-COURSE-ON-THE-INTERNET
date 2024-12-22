import { useState, ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button
        className="border p-5 bg-gray-300"
        onClick={() => setShouldShow(true)}
      >
        Show Modal
      </button>

      {shouldShow && (
        <section
          className="fixed left-0 top-0 z-index-10 w-screen h-full overflow-auto bg-black bg-opacity-50"
          onClick={() => setShouldShow(false)}
        >
          <div
            className="bg-white mx-[10%] my-auto p-[20px] w-[50%]"
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            <button
              className="border p-5 bg-gray-300"
              onClick={() => setShouldShow(false)}
            >
              Hide Modal
            </button>
            {children}
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;
