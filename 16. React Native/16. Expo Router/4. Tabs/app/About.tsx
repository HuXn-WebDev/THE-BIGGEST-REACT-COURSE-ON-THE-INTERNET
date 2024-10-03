import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

const About = () => {
  return (
    <View>
      <Text>About</Text>
      {/* <Link href="/users/10">Go To Users Screen</Link> */}
      <Pressable onPress={() => router.push("/users/10")}>
        <Text>Go To Users Screen</Text>
      </Pressable>
    </View>
  );
};

export default About;
