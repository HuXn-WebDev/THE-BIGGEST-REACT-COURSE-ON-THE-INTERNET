import { Button, Text, View } from "react-native";

const WithoutState = () => {
  let counter = 0;

  return (
    <View>
      <Text>Count: {counter}</Text>
      <Button title="Increment" onPress={() => counter++} />
    </View>
  );
};

export default WithoutState;
