import { View, Text, Button } from "react-native";
import { useCounterStore } from "../store/store";
import ChangeUI from "../components/ChangeUI";

const Index = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <ChangeUI />
    </View>
  );
};

export default Index;
