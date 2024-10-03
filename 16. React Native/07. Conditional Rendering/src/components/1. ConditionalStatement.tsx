import { Text } from "react-native";

const ValidPassword = () => <Text>Valid Password</Text>;
const InvalidPassword = () => <Text>Invalid Password</Text>;

const Password = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword />;
  }

  return <InvalidPassword />;
};

const ConditionalStatment = () => {
  return <Password isValid={false} />;
};

export default ConditionalStatment;
