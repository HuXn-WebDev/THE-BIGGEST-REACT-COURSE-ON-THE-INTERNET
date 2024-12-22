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
    <section className="flex flex-1">
      <div style={{ width: leftWidth }} className="p-4">
        {left}
      </div>
      <div style={{ width: rightWidth }} className="p-4">
        {right}
      </div>
    </section>
  );
};

export default SplitScreen;
