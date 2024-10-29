import { motion } from "framer-motion";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const StaggeredList = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={staggerVariants}
          className="mb-2 p-5 bg-yellow-300"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggeredList;
