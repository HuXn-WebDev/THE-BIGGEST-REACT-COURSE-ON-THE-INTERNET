import { ReactNode } from "react";

interface CardProps {
  cardTitle: ReactNode;
  cardContent: ReactNode;
  cardButton: ReactNode;
}

const Card = ({ cardTitle, cardContent, cardButton }: CardProps) => {
  return (
    <div>
      {cardTitle}
      {cardContent}
      {cardButton}
    </div>
  );
};

export default Card;
