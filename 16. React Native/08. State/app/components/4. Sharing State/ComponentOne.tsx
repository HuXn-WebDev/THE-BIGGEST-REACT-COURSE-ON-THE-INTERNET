import { Button, Text, View } from "react-native";

interface ComponentOneProps {
  count: number;
  onClickHandler: () => void;
}

const ComponentOne = ({ count, onClickHandler }: ComponentOneProps) => {
  return (
    <View>
      <Text>Component One</Text>
      <Text>{count}</Text>
      <Button title="Press Me" onPress={onClickHandler} />
    </View>
  );
};

export default ComponentOne;
