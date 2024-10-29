import { useState } from "react";
import { motion } from "framer-motion";

const SwipeableCard = () => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleSwipe = (_: any, info: any) => {
    if (info.offset.x > 100) {
      setIsRemoved(true);
    } else if (info.offset.x < -100) {
      setIsRemoved(true);
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      onDragEnd={handleSwipe}
      className={`w-64 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white ${
        isRemoved ? "hidden" : ""
      }`}
    >
      Swipe me!
    </motion.div>
  );
};

export default SwipeableCard;
