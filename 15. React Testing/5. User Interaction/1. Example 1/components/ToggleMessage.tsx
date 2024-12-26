import { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMessage = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleMessage}>Toggle Message</button>
      {isVisible && <p>The message is visible!</p>}
    </div>
  );
};

export default ToggleMessage;
