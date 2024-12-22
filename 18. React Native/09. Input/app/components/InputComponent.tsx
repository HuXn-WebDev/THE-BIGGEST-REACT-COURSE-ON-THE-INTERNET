import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const InputComponent = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>{name}</Text>
      <TextInput
        style={{ borderColor: "gray", borderWidth: 1 }}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
};

export default InputComponent;
