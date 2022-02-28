import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.whiteBg}>
        <Text style={(styles.text, styles.big)}>Ceci est du texte</Text>
        <Text style={(styles.text, styles.centered)}>Et encore du texte</Text>
        <Text style={(styles.text, styles.bold)}>
          Bon je crois qu'on a compris...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },

  whiteBg: {
    backgroundColor: "white",
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
