import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";

const CarComponent = () => {
  const price = 2000000;
  const imageWidth = 300;
  const imageHeight = 300;
  const carName = "Lambo";
  const carRatings = 3.5;
  const carDescription = "Here is some random car description";

  return (
    <View>
      <Text style={styles.pill}>${price}</Text>

      <Image
        source={require("../assets/image.jpg")}
        style={{ width: imageWidth, height: imageHeight }}
      />
      <Text style={styles.heading}>{carName}</Text>
      <Text>{carDescription}</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    width: 80,
    marginTop: 20,
    textAlign: "center",
  },

  heading: {
    fontSize: 20,
  },

  button: {
    backgroundColor: "black",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
    width: 120,
  },

  buttonText: {
    color: "white",
    padding: 10,
  },
});

export default CarComponent;
