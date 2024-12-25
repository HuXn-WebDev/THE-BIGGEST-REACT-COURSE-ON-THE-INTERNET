import { SafeAreaView, View } from "react-native";
import { NumberProvider } from "../context/RandomNumberContext";
import RandomNumber from "../components/RandomNumber";
import AddRandomNumber from "../components/AddRandomNumber";

const Index = () => {
  return (
    <View>
      <NumberProvider>
        <SafeAreaView>
          <RandomNumber />
          <AddRandomNumber />
        </SafeAreaView>
      </NumberProvider>
    </View>
  );
};

export default Index;
