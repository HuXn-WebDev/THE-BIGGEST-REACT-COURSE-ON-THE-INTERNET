import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

interface DataProps {
  id: number;
  title: string;
  body: string;
}

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      setData(result);
      // console.log(result);
    };

    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <View>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }: { item: DataProps }) => (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default DataFetching;
