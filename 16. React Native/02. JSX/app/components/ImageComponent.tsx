// https://reactnative.dev/docs/images
import { Image, Text, View } from "react-native";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Let's explore Images</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("../assets/image.jpg")}
      />

      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default ButtonComponent;
