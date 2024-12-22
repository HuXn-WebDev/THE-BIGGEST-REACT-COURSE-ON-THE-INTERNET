import { ReactNode } from "react";

const CardContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-2">
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  );
};

export default CardContent;
