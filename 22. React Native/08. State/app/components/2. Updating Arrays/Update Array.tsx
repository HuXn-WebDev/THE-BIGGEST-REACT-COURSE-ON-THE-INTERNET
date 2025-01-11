import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

const UpdateArray = () => {
  const [friends, setFriends] = useState(["Alex", "John", "Jordan"]);

  const addOne = () => setFriends([...friends, "HuXn"]);
  const removeOne = () => setFriends(friends.filter((f) => f !== "John"));
  const updateOne = () =>
    setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));

  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <Button title="Add One" onPress={addOne} />
      <Button title="Remove One" onPress={removeOne} />
      <Button title="Update One" onPress={updateOne} />
    </View>
  );
};

export default UpdateArray;
