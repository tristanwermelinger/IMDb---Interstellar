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
import matthew from "./assets/matthew.png";

const App = () => {
  return (
    <View style={styles.forall}>
      <View style={styles.forsize}>
        <Image source={logo} style={[styles.cover, styles.colorstyle]} />
        <View style={styles.container}>
          <Text style={[styles.cover, styles.bckg, styles.titlesize]}>
            <Interstellara></Interstellara>
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
          <View style={styles.flexrow}>
            <Image source={film} style={[styles.filmsize, styles.flexright]} />
            <View>
              <Text style={styles.textcolor}>
                g Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                quasi et possimus quae, earum, incidunt cumque praesentium
                <TouchableHighlight>
                  <Text style={[styles.pimpbutton, styles.margintoadd]}>
                    + ADD TO WATCHLIST
                  </Text>
                </TouchableHighlight>
              </Text>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
      <View style={styles.flextext}>
        <Text style={styles.colornote}>8.6/10</Text>
        <Text style={styles.colornote}>RATE THIDS</Text>
        <Text style={styles.colornote}>Metascore</Text>
      </View>
      <View>
        <Text style={[styles.cover, styles.titlesize, styles.bckg]}>
          Top Billed Cast
        </Text>
      </View>
      <View>
        <Image
          source={matthew}
          style={[styles.cover, styles.colorstyle]}
        ></Image>
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

  margintoadd: {
    marginTop: 20,
  },

  textcolor: {
    color: "white",
    marginLeft: 20,
    width: 160,
  },

  pimpbutton: {
    backgroundColor: "blue",
    alignItems: "flex-end",
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    width: 130,
  },

  flexbut: {
    flexDirection: "column",
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
    // borderWidth: 1,
    // borderColor: "yellow",
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
  colornote: {
    color: "white",
  },
  flextext: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});

export default App;
