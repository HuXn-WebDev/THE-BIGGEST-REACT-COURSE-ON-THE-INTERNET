import { View } from "react-native";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import { useState } from "react";

const SharingState = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)} />
    </View>
  );
};

export default SharingState;
