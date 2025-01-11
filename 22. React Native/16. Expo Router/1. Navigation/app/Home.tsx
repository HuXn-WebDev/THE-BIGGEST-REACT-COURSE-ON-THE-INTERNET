import { Link } from "expo-router";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Link href="/Index">Back</Link>
      <Text>Welcome To Home Screen 🏠</Text>
    </View>
  );
};

export default HomeScreen;
