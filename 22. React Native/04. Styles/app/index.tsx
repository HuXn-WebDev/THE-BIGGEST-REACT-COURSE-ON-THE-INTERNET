import { View } from "react-native";
import InlineStyle from "./components/InlineStyle";
import InternalStyle from "./components/InternalStyle";
import ExternalStyle from "./components/ExternalStyle";

const Index = () => {
  return (
    <View>
      {/* <InlineStyle /> */}
      {/* <InternalStyle /> */}
      <ExternalStyle />
    </View>
  );
};

export default Index;
