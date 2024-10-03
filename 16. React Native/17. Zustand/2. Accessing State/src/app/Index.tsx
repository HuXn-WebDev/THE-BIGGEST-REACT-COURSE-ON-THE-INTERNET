import { View, Text } from "react-native";
import { useCounterStore } from "../store/store";

const Index = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
    </View>
  );
};

export default Index;
