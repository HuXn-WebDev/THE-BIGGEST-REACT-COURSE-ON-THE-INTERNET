import { useState } from "react";
import { motion } from "framer-motion";

const tooltipVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Tooltip = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-2 bg-blue-500 text-white"
      >
        Hover over me
      </button>
      {visible && (
        <motion.div
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
          className="absolute bg-gray-700 text-white p-2 rounded"
        >
          Tooltip content
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
