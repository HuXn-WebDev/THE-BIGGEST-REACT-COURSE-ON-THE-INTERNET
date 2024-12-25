import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <View>
      <Text>{isOn ? "On" : "Off"}</Text>
      <Button title="Toggle" onPress={() => setIsOn(!isOn)} />
    </View>
  );
};

export default ToggleButton;
