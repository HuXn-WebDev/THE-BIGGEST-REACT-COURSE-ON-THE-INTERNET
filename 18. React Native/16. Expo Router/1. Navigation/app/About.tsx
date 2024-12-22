import { Link } from "expo-router";
import { View, Text } from "react-native";

const About = () => {
  return (
    <View>
      <Link href="/Index">Back</Link>
      <Text>About Screen</Text>
    </View>
  );
};
export default About;
