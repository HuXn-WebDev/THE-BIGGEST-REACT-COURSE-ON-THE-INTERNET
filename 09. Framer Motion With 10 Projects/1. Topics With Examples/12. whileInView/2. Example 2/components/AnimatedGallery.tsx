import { motion } from "framer-motion";

const boxes = Array.from({ length: 6 }, (_, index) => index + 1);

const AnimatedBoxes = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-10">Scroll to Animate</h1>
      <div className="space-y-6">
        {boxes.map((box) => (
          <motion.div
            key={box}
            className="w-64 h-64 bg-blue-500 flex items-center justify-center text-white text-xl rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Box {box}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBoxes;
