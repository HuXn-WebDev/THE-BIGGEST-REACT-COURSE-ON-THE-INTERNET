import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const weatherData = {
  London: "20°C, Clear",
  Paris: "22°C, Sunny",
  NewYork: "18°C, Cloudy",
};

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = () => {
    setWeather(weatherData[city] || "No data available");
  };

  return (
    <View>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={getWeather} />
      {weather ? <Text style={styles.weather}>{weather}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  weather: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default WeatherApp;
