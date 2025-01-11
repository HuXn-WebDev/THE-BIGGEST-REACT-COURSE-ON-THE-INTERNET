import { View } from "react-native";
// import WithoutState from "./components/1. Basic Counter/WithoutState";
import WithState from "./components/1. Basic Counter/WithState";
import UpdateArray from "./components/2. Updating Arrays/Update Array";
import UpdateObject from "./components/3. Updating Objects/UpdateObject";
import SharingState from "./components/4. Sharing State/Sharing State";

const Index = () => {
  return (
    <View>
      {/* <WithoutState /> */}
      {/* <WithState /> */}
      {/* <UpdateArray /> */}
      {/* <UpdateObject /> */}
      <SharingState />
    </View>
  );
};

export default Index;
