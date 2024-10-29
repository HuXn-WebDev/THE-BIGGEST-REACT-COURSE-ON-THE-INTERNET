import { motion } from "framer-motion";

const buttons = ["Button 1", "Button 2", "Button 3", "Button 4"];

const StaggeredButtonPress = () => {
  return (
    <motion.div
      className="flex space-x-4"
      whileHover={{ transition: { staggerChildren: 0.2 } }}
    >
      {buttons.map((label, index) => (
        <motion.button
          key={index}
          className="p-2 bg-blue-500 text-white rounded"
          whileHover={{ scale: 1.1 }}
        >
          {label}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default StaggeredButtonPress;
