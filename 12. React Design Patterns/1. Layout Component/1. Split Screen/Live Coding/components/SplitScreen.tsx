import { ReactNode } from "react";

interface SplitScreenProps {
  children: [ReactNode, ReactNode];
  leftWeight: number;
  rightWeight: number;
}

const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) => {
  const [left, right] = children;

  const leftWidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;

  return (
    <section className="flex w-screen">
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }}>{right}</div>
    </section>
  );
};

export default SplitScreen;
