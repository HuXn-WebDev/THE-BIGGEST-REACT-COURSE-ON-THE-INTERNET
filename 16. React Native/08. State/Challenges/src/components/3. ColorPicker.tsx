import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  return (
    <View style={{ backgroundColor: selectedColor }}>
      <Text style={styles.title}>Pick a Color</Text>
      <View style={styles.colorsContainer}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorBox, { backgroundColor: color }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  colorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  colorBox: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 30,
  },
});

export default ColorPicker;
