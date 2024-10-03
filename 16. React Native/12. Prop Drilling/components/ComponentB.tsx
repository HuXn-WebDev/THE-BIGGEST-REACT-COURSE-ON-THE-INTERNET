import { View, Text } from "react-native";
import ComponentC from "./ComponentC";

const ComponentB = ({ username }: { username: string }) => {
  return <ComponentC username={username} />;
};

export default ComponentB;
