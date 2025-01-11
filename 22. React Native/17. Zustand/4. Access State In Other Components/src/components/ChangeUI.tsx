import { View, Text, Button } from "react-native";
import { useCounterStore } from "../store/store";

const ChangeUI = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <View>
      <Button onPress={increment} title={"Increment"} />
      <Button onPress={decrement} title={"Decrement"} />
    </View>
  );
};
export default ChangeUI;
