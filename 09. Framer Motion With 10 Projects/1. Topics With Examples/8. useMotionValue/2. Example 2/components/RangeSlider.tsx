import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChangeEvent } from "react";

const ColorChanger = () => {
  const hue = useMotionValue(0);
  const backgroundColor = useTransform(hue, (h) => `hsl(${h}, 100%, 50%)`);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    hue.set(parseFloat(e.target.value));
  };

  return (
    <div>
      <motion.div
        className="color-box"
        style={{ backgroundColor, width: 200, height: 200, borderRadius: 16 }}
      />
      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={360}
          step={1}
          defaultValue={0}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default ColorChanger;
