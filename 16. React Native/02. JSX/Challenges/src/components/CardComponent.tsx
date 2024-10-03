import { View, Text, Image, Button } from "react-native";

const CardComponent = () => {
  return (
    <View>
      {/* https://unsplash.com/photos/man-standing-in-front-of-white-concrete-wall-wKOKidNT14w */}
      <Image
        source={require("./../assets/image.jpg")}
        style={{ width: 200, height: 200 }}
      />

      <Text>HuXn WebDev</Text>
      <Text>My name is huxn and i love coding.</Text>
      <Button title="Press Me" />
    </View>
  );
};

export default CardComponent;
