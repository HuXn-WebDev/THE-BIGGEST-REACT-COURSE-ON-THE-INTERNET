import { LargeInput } from "./MyInput.stories";
import { Primary } from "./Button.stories";

export default {
  title: "Combo/Input and button",
};

export const Combo = () => {
  return (
    <>
      <LargeInput placeholder="Enter whatever" />
      <Primary />
    </>
  );
};
