import { useContext } from "react";
import { Button } from "react-native";
import { RandomNumberContext } from "../context/RandomNumberContext";

const AddRandomNumber = () => {
  const { addNumber } = useContext(RandomNumberContext);

  const handleAddNumber = () => {
    addNumber({
      id: String(Date.now()),
      name: "Number " + Math.floor(Math.random() * 100),
    });
  };

  return <Button title="Add Random Number" onPress={handleAddNumber} />;
};

export default AddRandomNumber;
