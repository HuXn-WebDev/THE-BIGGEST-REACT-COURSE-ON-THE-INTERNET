import { motion } from "framer-motion";

const Gestures = () => {
  return (
    <div>
      {/* whileHover */}
      {/* <motion.div
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="box"
    /> */}
      {/* ------------------- */}

      {/* ------------------- */}
      {/* whileTap */}
      {/* <motion.div
      whileTap={{ scale: 0.8, backgroundColor: "orange" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="box"
    /> */}

      {/* ------------------- */}
      {/* whileDrag */}
      {/* <motion.div
        drag
        whileDrag={{ scale: 1.1, backgroundColor: "orange" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="box"
      /> */}

      {/* ------------------- */}
      {/* whileDrag Constraints */}
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ width: 100, height: 100, backgroundColor: "purple" }}
      />
    </div>
  );
};

export default Gestures;
