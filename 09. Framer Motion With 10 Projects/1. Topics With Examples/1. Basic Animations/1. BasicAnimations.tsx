import { motion } from "framer-motion";

const BasicAnimations = () => {
  return (
    <div>
      {/* <motion.div className="box" animate={{ x: 20 }} /> */}
      {/* <motion.div className="box" animate={{ y: 100 }} /> */}
      <motion.div className="box" animate={{ x: 100, y: 100 }} />
    </div>
  );
};

export default BasicAnimations;
