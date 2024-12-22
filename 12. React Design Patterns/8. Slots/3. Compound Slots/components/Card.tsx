import { ReactNode } from "react";
import CardButton from "./CardButton";
import CardContent from "./CardContent";
import CardTitle from "./CardTitle";

const Card = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Button = CardButton;

export default Card;

//  ⚠️⚠️ SOLUTION 1  ⚠️⚠️
// import CardButton from "./CardButton";
// import CardContent from "./CardContent";
// import CardTitle from "./CardTitle";

// const Card = () => {
//   return (
//     <>
//       <CardTitle>
//         <h1>This is my Card Title</h1>
//       </CardTitle>
//       <CardContent>
//         <h2>This is my card content</h2>
//       </CardContent>
//       <CardButton>
//         <button>This is my random card button</button>
//       </CardButton>
//     </>
//   );
// };
// export default Card;
