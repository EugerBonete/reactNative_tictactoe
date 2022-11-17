import { Image, Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;

const Cell = ({ source, cellStyle, onPress }) => {
  return (
    <Pressable style={[styles.cell, cellStyle]} onPress={onPress}>
      <Image source={source} style={styles.icon} />
    </Pressable>
  );
};

export default Cell;

const styles = StyleSheet.create({
  icon: {
    height: 62,
    width: 62,
  },
});
