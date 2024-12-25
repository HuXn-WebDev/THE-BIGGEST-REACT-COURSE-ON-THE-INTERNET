import { Link, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Users = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Link href="/About">Back</Link>
      <Text>User - {id}</Text>
    </View>
  );
};

export default Users;
