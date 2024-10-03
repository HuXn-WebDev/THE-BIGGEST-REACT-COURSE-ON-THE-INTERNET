import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("BasicEffect component mounted");
  }, []);

  return (
    <div>
      <h1>Check the console to see the message!</h1>
    </div>
  );
};

export default BasicEffect;
