import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const DeckBrief = ({ title, value }) => {
  return (
    <View style={styles.deckBrief}>
      <Text>{title}</Text>
      <Text>{value.questions.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deckBrief: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 2,
  },
});
