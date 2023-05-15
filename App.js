import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "./assets/logo-imdb.png";

const App = () => {
  return (
    <>
      <Image source={logo} style={styles.cover} />
      <View style={styles.container}>
        <Text>Interstellar</Text>
        <Text>2014 PG-13 2h49min Adventure, Drama, Sci-Fi</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: 80,
    width: 80,
  },
});

export default App;
