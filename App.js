import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
import { ActivityIndicator } from "react-native-web";
import Paragraphes from "./components/Paragraphes";

export default function App() {
  const handlePress = () => {
    console.log("PRESSABLE ALERT");
    alert(null, "Button pressed");
    setShowLoading(true);
  };

  const [showLoading, setShowLoading] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.whiteBg}>
        <Paragraphes style={(styles.text, styles.big)} children="Du texte" />
        <Paragraphes
          style={(styles.text, styles.centered)}
          children="Encore du texte"
        />
        <Paragraphes
          style={(styles.text, styles.bold)}
          children="Encore PLUUUS de texte"
        />
        <Image
          source={{
            uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
          }}
          alt="Logo Konexio"
        />
        {/* <Image source={require("./assets/konexio-logo_1.png")} alt="" /> */}
        <Pressable onPress={handlePress}>
          <Text>Click me!</Text>
        </Pressable>
        {showLoading && <ActivityIndicator size="large" />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(80, 150, 250, 0.8)",
  },

  whiteBg: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    margin: "80 0",
  },

  big: {
    fontSize: 30,
  },

  centered: {
    textAlign: "center",
  },

  bold: {
    fontWeight: "bold",
  },
});
