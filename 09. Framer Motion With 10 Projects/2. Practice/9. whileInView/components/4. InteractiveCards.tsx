import { motion } from "framer-motion";

const InteractiveCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((item) => (
        <motion.div
          key={item}
          className="bg-blue-500 p-6 text-white text-center rounded-lg"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl">Card {item}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveCards;
