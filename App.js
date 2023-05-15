import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "./assets/logo-imdb.png";

const App = () => {
  return (
    <>
      <Image source={logo} style={styles.cover} />
      <View style={styles.container}>
        <Text>Hello app Interstellar</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: 80,
    width: 80,
    marginTop: 50,
  },
});

export default App;
