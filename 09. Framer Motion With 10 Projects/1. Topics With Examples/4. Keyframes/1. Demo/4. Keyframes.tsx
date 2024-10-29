import { motion } from "framer-motion";

const Keyframes = () => {
  return (
    <div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 3, 4, 3, 2, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ duration: 5 }}
        className="box"
      />
    </div>
  );
};
export default Keyframes;
