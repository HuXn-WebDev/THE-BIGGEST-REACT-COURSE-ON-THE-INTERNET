import { Text } from "react-native";

const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const Password = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPassword />;
  // }

  // return <InvalidPassword />;
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

const Index = () => {
  return <Password isValid={false} />;
};

export default Index;
