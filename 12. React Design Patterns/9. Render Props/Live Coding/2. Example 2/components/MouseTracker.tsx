import { useState } from "react";

function MouseTracker({ render }: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: "100vh" }}>
      {render(position)} {/* Using the render prop to pass the state */}
    </div>
  );
}

export default MouseTracker;
