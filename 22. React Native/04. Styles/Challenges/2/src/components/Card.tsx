import { View, Text, Image, StyleSheet, Button } from "react-native";

const Card = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../assets/image.jpg")}
      />

      <Text style={styles.heading}>HuXn WebDev</Text>
      <Text style={styles.text}>My name is huxn and i love coding.</Text>
      <Button title="Press Me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    paddingBottom: 40,
    margin: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },

  heading: {
    fontSize: 20,
    marginBottom: 10,
  },

  text: {
    marginBottom: 20,
  },
});

export default Card;
