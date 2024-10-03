import { Text, View } from "react-native";

const DynamicContent = () => {
  const username = "HuXn";
  const multiply = (a: number, b: number) => a + b;
  let me = { name: "huxn", age: 22 };

  return (
    <View>
      <Text>My name is {username}</Text>
      <Text>2 + 2 = {2 + 2}</Text>
      <Text>My Friends List: {["Alex", "John", "Peter", "Jordan"]}</Text>
      <Text>2 * 2 = {multiply(2, 2)}</Text>

      {/* You cannot render object dynamically ❌ */}
      {/* <Text>Person: {me}</Text> */}
    </View>
  );
};

export default DynamicContent;
