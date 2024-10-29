import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <motion.div
      className="w-screen h-screen"
      animate={{
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
};

export default AnimatedBackground;
