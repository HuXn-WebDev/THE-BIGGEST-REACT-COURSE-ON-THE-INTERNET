import { useMotionValue, motion, useMotionValueEvent } from "framer-motion";

const MotionValueComponent = () => {
  const x = useMotionValue(0);

  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started on x");
  });

  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
  });

  return (
    <motion.div
      className="box"
      drag
      dragConstraints={{ left: 0, right: 200 }}
      style={{ x }}
    />
  );
};

export default MotionValueComponent;
