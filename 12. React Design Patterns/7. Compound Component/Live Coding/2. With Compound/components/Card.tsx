import CardTitle from "./CardTitle";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border rounded-lg shadow-lg w-[20rem] p-4 bg-white">
      {children}
    </div>
  );
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
