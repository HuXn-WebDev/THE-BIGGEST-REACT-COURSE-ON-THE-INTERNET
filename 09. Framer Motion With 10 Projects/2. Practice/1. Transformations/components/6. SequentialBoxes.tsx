import { motion } from "framer-motion";

const SequentialBoxes = () => (
  <>
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="bg-teal-500 w-20 h-20 m-2"
        animate={{ x: 100 }}
        transition={{ duration: 0.5, delay: i * 0.5 }}
      />
    ))}
  </>
);

export default SequentialBoxes;
