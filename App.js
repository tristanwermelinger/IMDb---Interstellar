import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "./assets/logo-imdb.png";

const App = () => {
  return (
    <>
      <Image source={require("./assets/logo-imdb.png")} style={styles.cover} />
      <View style={styles.container}>
        <Text>Hello app Interstellar</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: 300,
    width: 200,
    marginTop: 100,
  },
});

export default App;
