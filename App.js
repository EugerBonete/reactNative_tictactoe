import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [activePlayer, setActivePlayer] = useState("0");
  return (
    <View style={styles.body}>
      <View
        style={[
          styles.playerInfo,
          { backgroundColor: activePlayer === "X" ? "#007ff4" : "#f40075" },
        ]}
      >
        <Text style={styles.playerTxt}>Player {activePlayer}'s turn</Text>
      </View>
      <View style={styles.mainContainer}>
        <Pressable></Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  playerInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  playerTxt: {
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#fff",
  },
});
