import { motion } from "framer-motion";
import { useState } from "react";

const SkewRectangle = () => {
  const [isSkewed, setIsSkewed] = useState(true);

  return (
    <motion.div
      className="bg-yellow-500 w-40 h-20"
      onClick={() => setIsSkewed(!isSkewed)}
      animate={{ skewX: isSkewed ? 20 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default SkewRectangle;
