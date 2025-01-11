import { Button, Text, View } from "react-native";

interface ComponentTwoProps {
  count: number;
  onClickHandler: () => void;
}

const ComponentTwo = ({ count, onClickHandler }: ComponentTwoProps) => {
  return (
    <View>
      <Text>Component Two</Text>
      <Text>{count}</Text>
      <Button title="Press Me" onPress={onClickHandler} />
    </View>
  );
};

export default ComponentTwo;
