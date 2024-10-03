import { Text, FlatList } from "react-native";

const ListData = () => {
  const locations = [
    {
      id: 1,
      name: "London",
    },
    {
      id: 2,
      name: "Paris",
    },
    {
      id: 3,
      name: "Berlin",
    },
    {
      id: 4,
      name: "Amsterdam",
    },
    {
      id: 5,
      name: "Barcelona",
    },
  ];

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={locations}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default ListData;
