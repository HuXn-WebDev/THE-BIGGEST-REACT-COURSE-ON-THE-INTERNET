import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View>
      <Text>Hello World</Text>
      <Link href="/About">Go To About Screen</Link>
    </View>
  );
};

export default Index;
