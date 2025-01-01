import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const DependencyList = () => {
  const [value, setValue] = useState(0);
  const [somethingElse, setSomethingElse] = useState(0);

  useEffect(() => {
    console.warn("useEffect with dependency array");
  }, [value]);

  return (
    <View>
      <Text>{value}</Text>
      <Button title="Increment" onPress={() => setValue(value + 1)} />

      <Button
        title="Something else"
        onPress={() => setSomethingElse(somethingElse + 1)}
      />
    </View>
  );
};

export default DependencyList;
