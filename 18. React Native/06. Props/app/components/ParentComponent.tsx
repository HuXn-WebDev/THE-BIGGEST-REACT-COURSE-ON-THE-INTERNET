import { Text, View } from "react-native";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <View>
      <Text>Parent Component</Text>

      <ChildComponent
        name="HuXn WebDev"
        age={22}
        hobbies={["Singing", "Coding", "Cooking"]}
      />
    </View>
  );
};

export default ParentComponent;
