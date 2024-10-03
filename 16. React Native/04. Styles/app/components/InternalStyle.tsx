import { Text, View, StyleSheet } from "react-native";

const InternalStyle = () => {
  return (
    <View>
      <Text style={styles.textStyle}>HuXn WebDev</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "crimson",
    fontSize: 30,
    backgroundColor: "yellow",
    margin: 20,
    padding: 20,
  },
});

export default InternalStyle;
