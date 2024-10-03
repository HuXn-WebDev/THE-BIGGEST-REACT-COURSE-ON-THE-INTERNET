import { FC } from "react";

interface Shape {
  name: string;
  age: number;
  isStudent: boolean;
}

const User: FC<Shape> = ({ name, age, isStudent }) => {
  return (
    <article>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </article>
  );
};

export default User;
