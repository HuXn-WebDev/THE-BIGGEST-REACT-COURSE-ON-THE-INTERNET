import { View, Text } from "react-native";
import ComponentB from "./ComponentB";

const ComponentA = ({ username }: { username: string }) => {
  return <ComponentB username={username} />;
};

export default ComponentA;
