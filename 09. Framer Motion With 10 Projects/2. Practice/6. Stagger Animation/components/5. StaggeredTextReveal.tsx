import { motion } from "framer-motion";

const text = "Hello World!";

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredTextReveal = () => {
  return (
    <motion.h1
      className="text-4xl font-bold text-white"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={staggerVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default StaggeredTextReveal;
