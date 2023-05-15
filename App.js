import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import logo from "./assets/logo-imdb.png";
import Constants from "expo-constants";
import film from "./assets/film.jpg";

const App = () => {
  return (
    <View style={styles.forall}>
      <View style={styles.forsize}>
        <Image source={logo} style={[styles.cover, styles.colorstyle]} />
        <View style={styles.container}>
          <Text style={[styles.cover, styles.bckg, styles.titlesize]}>
            Interstellar
          </Text>

          <Text
            style={[
              styles.cover,
              styles.bckg,
              styles.flexright,
              styles.textfull,
            ]}
          >
            2014 PG-13 2h49min Adventure, Drama, Sci-Fi
          </Text>
          <View>
            <View style={styles.flexrow}>
              <Image
                source={film}
                style={[styles.filmsize, styles.flexright]}
              />
              <Text style={styles.textcolor}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                quasi et possimus quae, earum, incidunt cumque praesentium
                doloribus
              </Text>
              <TouchableHighlight> + ADD TO WATCHLIST</TouchableHighlight>
            </View>
          </View>

          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forall: {
    flex: 1,
    backgroundColor: "black",
  },

  titlesize: {
    fontSize: 25,
    fontWeight: "bold",
  },

  textcolor: {
    color: "white",
    marginLeft: 20,
  },

  textfull: {
    flex: 1,
    marginBottom: 20,
    width: 1000,
  },

  cover: {
    height: 120,
    width: 200,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    borderWidth: 1,
    borderColor: "yellow",
  },
  forsize: {
    marginLeft: 15,
    width: 100,
    flexWrap: "wrap",
    backgroundColor: "black",
  },

  colorstyle: {
    backgroundColor: "grey",
  },
  bckg: {
    backgroundColor: "black",
    color: "white",
  },
  filmsize: {
    height: 240,
    width: 136,
  },
  flexright: {
    justifyContent: "center",
  },
  flexrow: {
    flexDirection: "row",
    marginRight: 15,
  },
});

export default App;
