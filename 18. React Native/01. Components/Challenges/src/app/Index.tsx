import { View } from "react-native";
import NameComponent from "../components/NameComponent";
import AgeComponent from "../components/AgeComponent";
import XHandleComponent from "../components/XHandleComponent";
import FavSubjectComponent from "../components/FavSubjectComponent";

const Index = () => {
  return (
    <View>
      <NameComponent />
      <AgeComponent />
      <XHandleComponent />
      <FavSubjectComponent />
    </View>
  );
};

export default Index;
