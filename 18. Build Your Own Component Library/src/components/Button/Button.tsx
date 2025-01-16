import React, { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode;
}

const Button = ({ children }: Props) => {
  return <div>Button {children}</div>;
};

export default Button;
