import { View } from "react-native";
import WithoutEmptyArray from "./components/WithoutEmptyArray";
import WithArray from "./components/WithArray";
import DependencyList from "./components/DependencyList";
import UseEffectInConditionals from "./components/UseEffectInConditionals";

const Index = () => {
  return (
    <View>
      {/* <WithoutEmptyArray /> */}
      {/* <WithArray /> */}
      {/* <DependencyList /> */}
      <UseEffectInConditionals />
    </View>
  );
};

export default Index;
