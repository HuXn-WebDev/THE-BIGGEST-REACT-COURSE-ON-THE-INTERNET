import { useState } from "react";
import { Button, Text, View } from "react-native";

const UpdateObject = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    setMovie({ ...movie, ratings: 5 });
  };

  return (
    <View>
      <Text>{movie.title}</Text>
      <Text>{movie.ratings}</Text>
      <Button title="Change Ratings" onPress={handleClick} />
    </View>
  );
};

export default UpdateObject;
