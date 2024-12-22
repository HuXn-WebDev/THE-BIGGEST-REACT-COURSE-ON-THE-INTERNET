import { ReactNode } from "react";

const CardFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-4">
      <p className="text-gray-500 text-xs">{children}</p>
    </div>
  );
};
export default CardFooter;
