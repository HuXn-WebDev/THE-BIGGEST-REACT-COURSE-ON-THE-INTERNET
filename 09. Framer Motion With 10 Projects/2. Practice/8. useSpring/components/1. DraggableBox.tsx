import { motion, useSpring } from "framer-motion";

const DraggableBox = () => {
  const x = useSpring(0);
  const y = useSpring(0);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        style={{ x, y }}
        className="w-32 h-32 bg-blue-500 rounded"
        onDrag={(_, info) => {
          x.set(info.offset.x);
          y.set(info.offset.y);
        }}
      />
      <p className="text-white">
        Position: ({x.get().toFixed(2)}, {y.get().toFixed(2)})
      </p>
    </div>
  );
};

export default DraggableBox;
