import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RandomNumberContext } from "../context/RandomNumberContext";

const RandomNumber = () => {
  const { num } = useContext(RandomNumberContext);

  return (
    <View>
      <Text style={styles.header}>Numbers List:</Text>
      <FlatList
        data={num}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    fontSize: 18,
    marginVertical: 8,
  },
});

export default RandomNumber;
