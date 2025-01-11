import { Text, View } from "react-native";

interface ChildProps {
  name: string;
  age: number;
  hobbies: string[];
}

// const ChildComponent = (props: ChildProps) => {
//   // console.log(props);

//   return (
//     <View>
//       <Text>Child Component</Text>
//       <Text>{props.name} </Text>
//       <Text>{props.age} </Text>
//       <Text>{props.hobbies} </Text>
//     </View>
//   );
// };

const ChildComponent = ({ name, age, hobbies }: ChildProps) => {
  return (
    <View>
      <Text>Child Component</Text>
      <Text>{name} </Text>
      <Text>{age} </Text>
      <Text>{hobbies} </Text>
    </View>
  );
};

export default ChildComponent;
