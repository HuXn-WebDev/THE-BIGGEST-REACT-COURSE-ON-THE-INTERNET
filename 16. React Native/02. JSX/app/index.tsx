import { View } from "react-native";
import TextComponent from "./components/TextComponent";
import ViewComponent from "./components/ViewComponent";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

const Index = () => {
  return (
    <View>
      <TextComponent />
      <ViewComponent />
      <ButtonComponent />
      <ImageComponent />
    </View>
  );
};

export default Index;
