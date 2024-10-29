import { motion } from "framer-motion";

const BouncingBall = () => {
  return (
    <motion.div
      className="w-16 h-16 bg-yellow-400 rounded-full"
      animate={{
        y: [0, -100, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
};

export default BouncingBall;
