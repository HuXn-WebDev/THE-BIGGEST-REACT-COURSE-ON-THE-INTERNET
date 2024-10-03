import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const UseEffectInConditionals = () => {
  const [value, setValue] = useState(0);

  //  ❌❌❌❌❌
  //   if (value > 0) {
  //     useEffect(() => {
  //       console.warn("useEffect inside the conditional statement");
  //     }, [value]);
  //   }

  // You cannot wrap hook with conditional statement
  // If you want logic you'll have to put it inside your hook.

  useEffect(() => {
    if (value > 3) {
      console.warn("useEffect inside the conditional statement");
    }
  });

  return (
    <View>
      <Text>{value}</Text>
      <Button title="Increment" onPress={() => setValue(value + 1)} />
    </View>
  );
};

export default UseEffectInConditionals;
