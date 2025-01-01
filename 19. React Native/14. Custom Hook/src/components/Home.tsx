import useFetch from "../hooks/useFetch";
import { Text, FlatList } from "react-native";

const Home = () => {
  // using our custom hook 👇
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
};

export default Home;
