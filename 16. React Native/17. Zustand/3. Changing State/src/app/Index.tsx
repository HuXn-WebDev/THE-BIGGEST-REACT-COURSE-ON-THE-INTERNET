import { View, Text, Button } from "react-native";
import { useCounterStore } from "../store/store";

const Index = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Button onPress={increment} title={"Increment"} />
      <Button onPress={decrement} title={"Decrement"} />
    </View>
  );
};

export default Index;
