import { Text, FlatList } from "react-native";

const ListData = () => {
  const fruits = ["apple", "banana", "orange"];

  return (
    // <FlatList
    //   data={fruits}
    //   renderItem={(element) => {
    //     console.log(element);
    //   }}
    // />

    // Destructuring the item
    // <FlatList
    //   data={fruits}
    //   renderItem={({ item }) => {
    //     console.log(item);
    //     return <Text>{item}</Text>;
    //   }}
    // />

    // Keys
    <FlatList
      data={fruits}
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        return <Text>{item}</Text>;
      }}
    />
  );
};

export default ListData;
