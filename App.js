import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { ActivityIndicator } from "react-native-web";

export default function App() {
  const handlePress = () => {
    console.log("PRESSABLE ALERT");
    alert(null, "Button pressed");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.whiteBg}>
        <Text style={(styles.text, styles.big)}>Ceci est du texte</Text>
        <Text style={(styles.text, styles.centered)}>Et encore du texte</Text>
        <Text style={(styles.text, styles.bold)}>
          Bon je crois qu'on a compris...
        </Text>
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
        <ActivityIndicator size="large" />
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
