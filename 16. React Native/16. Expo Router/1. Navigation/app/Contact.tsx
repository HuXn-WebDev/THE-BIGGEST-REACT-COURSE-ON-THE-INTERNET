import { Link } from "expo-router";
import { View, Text } from "react-native";

const Contact = () => {
  return (
    <View>
      <Link href="/Index">Back</Link>
      <Text>Contact Screen</Text>
    </View>
  );
};

export default Contact;
