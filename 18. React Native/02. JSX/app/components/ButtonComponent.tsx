// https://reactnative.dev/docs/button
import { Text, View, Button, Pressable } from "react-native";

const ButtonComponent = () => {
  return (
    <View>
      <Text>Let's explore Buttons</Text>
      <Button title="Learn More" color="teal" />
      <Button title="Learn More" color="#841584"></Button>
      {/* <Button title="Learn More" disabled={false} color="#841584"></Button> */}
      <Button title="Learn More" disabled></Button>

      {/* Events */}
      <Button
        title="Click & check console"
        onPress={() => console.log("Pressed")}
      />

      <Button title="Alert" onPress={() => alert("You pressed me")} />

      {/* Pressable */}

      {/*
         1. onPress: Function that is called when the component is pressed. Required.
         2. onPressIn: Function that is called when the press gesture starts.
         3. onPressOut: Function that is called when the press gesture ends (or is cancelled).
         4. onLongPress: Function that is called when a long press is detected.
     */}

      <Pressable onPress={() => console.log("Pressed")}>
        <Text style={{ color: "teal" }}>Press Me</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log("On Press In")}>
        <Text style={{ color: "coral" }}>On Press In</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("On Press Out")}>
        <Text style={{ color: "magenta" }}>On Press Out</Text>
      </Pressable>

      {/* Handling long press 500ms */}
      <Pressable onLongPress={() => console.log("Long Pressed")}>
        <Text style={{ color: "crimson" }}>Long Press Me</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
