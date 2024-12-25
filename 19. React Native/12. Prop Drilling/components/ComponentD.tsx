import { View, Text } from "react-native";

const ComponentD = ({ username }: { username: string }) => {
  return (
    <View>
      <Text>Hello {username}</Text>
    </View>
  );
};

export default ComponentD;
