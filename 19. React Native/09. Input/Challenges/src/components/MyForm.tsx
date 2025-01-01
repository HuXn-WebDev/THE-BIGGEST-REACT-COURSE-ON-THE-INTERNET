import { useState } from "react";
import { View, Text, TextInput } from "react-native";

const MyForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeText = (text: any) => {
    setInputValue(text);
  };

  return (
    <View>
      <Text>Enter some text:</Text>
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Type here..."
        onChangeText={handleChangeText}
        value={inputValue}
      />

      <Text>{inputValue}</Text>
    </View>
  );
};

export default MyForm;
