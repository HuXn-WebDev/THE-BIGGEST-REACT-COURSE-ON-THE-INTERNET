import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FadeInComponent = () => {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="bg-blue-500 p-4 rounded shadow"
    >
      <h2 className="text-white">Fade In Component</h2>
    </motion.div>
  );
};

export default FadeInComponent;
