import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import Cell from "./components/Cell";

const windowWidth = Dimensions.get("window").width;

export default function App() {
  const arr = [null, null, null, null, null, null, null, null, null];
  const [activePlayer, setActivePlayer] = useState("0");
  const [markers, setMarkers] = useState(arr);

  const checker = (val) => {
    if (val === "X") {
      return require("./assets/img/cross.png");
    }
    if (val === "0") {
      return require("./assets/img/zero.png");
    } else return null;
  };

  const markPosition = (position) => {
    if (markers[position] === null) {
      let temp = [...markers];
      temp[position] = activePlayer;
      setMarkers(temp);

      //transfer turn
      if (activePlayer === "X") {
        setActivePlayer("0");
      } else {
        setActivePlayer("X");
      }
    }
  };

  const calculateWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[b] && square[c] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(markers);
    if (winner === "X") {
      alert("Player X Wins!");
      setMarkers(arr);
    }
    if (winner === "0") {
      alert("Player 0 Wins!");
      setMarkers(arr);
    }
  }, [markers]);
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
        {/* top 3 */}
        <Cell
          onPress={() => markPosition(0)}
          source={checker(markers[0])}
          cellStyle={styles.top1}
        />
        <Cell
          onPress={() => markPosition(1)}
          source={checker(markers[1])}
          cellStyle={styles.top2}
        />
        <Cell
          onPress={() => markPosition(2)}
          source={checker(markers[2])}
          cellStyle={styles.top3}
        />

        {/* mid 3 */}
        <Cell
          onPress={() => markPosition(3)}
          source={checker(markers[3])}
          cellStyle={styles.mid1}
        />
        <Cell
          onPress={() => markPosition(4)}
          source={checker(markers[4])}
          cellStyle={styles.mid2}
        />
        <Cell
          onPress={() => markPosition(5)}
          source={checker(markers[5])}
          cellStyle={styles.mid3}
        />

        {/* bottom 3 */}
        <Cell
          onPress={() => markPosition(6)}
          source={checker(markers[6])}
          cellStyle={styles.bot1}
        />
        <Cell
          onPress={() => markPosition(7)}
          source={checker(markers[7])}
          cellStyle={styles.bot2}
        />
        <Cell
          onPress={() => markPosition(8)}
          source={checker(markers[8])}
          cellStyle={styles.bot3}
        />
      </View>
      <Pressable style={styles.cancelBtn} onPress={() => setMarkers(arr)}>
        <Image
          source={require("./assets/img/replay.png")}
          style={styles.cancelIcon}
        />
      </Pressable>
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
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 60,
  },
  top1: {
    height: windowWidth / 3.2,
    width: windowWidth / 3.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 6,
  },
  top2: {
    height: windowWidth / 3.2,
    width: windowWidth / 3.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 6,
    borderBottomWidth: 6,
  },
  top3: {
    height: windowWidth / 3.2,
    width: windowWidth / 3.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 6,
    borderBottomWidth: 6,
  },
  mid1: {
    height: windowWidth / 3.2,
    width: windowWidth / 3.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 6,
  },
  mid2: {
    height: windowWidth / 3.2,
    width: windowWidth / 3.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 6,
    borderBottomWidth: 6,
  },
  mid3: {
    height: windowWidth / 3.2,
    width: windowWidth / 3.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 6,
    borderBottomWidth: 6,
  },
  bot1: {
    height: windowWidth / 3.2,
    width: windowWidth / 3.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bot2: {
    height: windowWidth / 3.2,
    width: windowWidth / 3.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 6,
  },
  bot3: {
    height: windowWidth / 3.2,
    width: windowWidth / 3.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 6,
  },
  cancelBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  cancelIcon: {
    width: 80,
    height: 80,
  },
});
