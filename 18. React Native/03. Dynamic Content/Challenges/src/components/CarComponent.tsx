import { View, Text, Image, Button } from "react-native";

const CarComponent = () => {
  const price = 2000000;
  const imageWidth = 300;
  const imageHeight = 300;
  const carName = "Lambo";
  const carRatings = 3.5;
  const carDescription = "Here is some random car description";

  return (
    <View>
      {/* https://unsplash.com/photos/red-lamborghini-gallardo-uwrTwMaxVR4 */}
      <Image
        source={require("../assets/image.jpg")}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <Text>{carName}</Text>
      <Text>{carRatings}</Text>
      <Text>{carDescription}</Text>
      <Text>{price}</Text>
      <Button title="Add to cart" />
    </View>
  );
};

export default CarComponent;
