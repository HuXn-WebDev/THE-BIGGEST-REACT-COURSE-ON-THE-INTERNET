import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import useFormInput from "../hooks/useFormInput";

const MyForm = () => {
  const nameInput = useFormInput("");
  const emailInput = useFormInput("");

  const handleSubmit = () => {
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);

    console.warn("Name:", nameInput.value);
    console.warn("Email:", emailInput.value);
  };

  return (
    <View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={nameInput.value}
        onChangeText={nameInput.onChange}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={emailInput.value}
        onChangeText={emailInput.onChange}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default MyForm;
