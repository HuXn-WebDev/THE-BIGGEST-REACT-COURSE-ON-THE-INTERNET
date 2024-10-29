import { motion, useSpring } from "framer-motion";

const HoverLinkedScale = () => {
  const scale = useSpring(1);

  return (
    <motion.button
      onHoverStart={() => scale.set(1.2)}
      onHoverEnd={() => scale.set(1)}
      style={{ scale }}
      className="p-4 bg-blue-500 text-white rounded"
    >
      Hover Me
    </motion.button>
  );
};

export default HoverLinkedScale;
