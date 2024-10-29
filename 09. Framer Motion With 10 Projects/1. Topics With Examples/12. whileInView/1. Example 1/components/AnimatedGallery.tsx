import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-start mt-[30rem]">
      <div className="h-[200vh] w-full flex justify-center items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{
            scale: 1.1,
            opacity: 1,
            y: -200,
          }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg p-6 shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold mb-2 text-black">Amazing Card</h2>
          <p className="text-gray-600">
            This card animates beautifully into view!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCard;
