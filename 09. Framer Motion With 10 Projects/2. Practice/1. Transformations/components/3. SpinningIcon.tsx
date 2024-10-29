import { motion } from "framer-motion";

const SpinningIcon = () => (
  <motion.img
    src="https://repository-images.githubusercontent.com/157846876/70574400-9e6a-11e9-8708-22d4bf4c3322"
    className="w-20 h-20"
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  />
);

export default SpinningIcon;
