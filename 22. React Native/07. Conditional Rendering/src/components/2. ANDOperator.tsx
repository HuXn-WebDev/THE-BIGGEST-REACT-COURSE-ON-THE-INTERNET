import { View, Text, FlatList } from "react-native";

const Index = () => {
  const groceries = ["milk", "bread", " eggs", "cheese"];

  return (
    <View>
      <Text>Cart 🛒</Text>
      {groceries.length > 0 && (
        <Text>You have {groceries.length} items in your Cart</Text>
      )}

      <View>
        <Text>👇 Groceries</Text>

        <FlatList
          data={groceries}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </View>
  );
};

export default Index;
