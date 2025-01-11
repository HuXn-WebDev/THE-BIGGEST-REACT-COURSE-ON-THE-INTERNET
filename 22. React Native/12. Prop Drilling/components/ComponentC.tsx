import { View, Text } from "react-native";
import ComponentD from "./ComponentD";

const ComponentC = ({ username }: { username: string }) => {
  return <ComponentD username={username} />;
};

export default ComponentC;
