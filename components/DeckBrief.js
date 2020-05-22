import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const DeckBrief = (props) => {
  console.log("props for DeckBrief", props);

  const { title, value, navigation } = props;

  const goToDeck = () => {
    navigation.navigate("Deck", { title });
  };

  return (
    <TouchableOpacity style={styles.deckBrief} onPress={goToDeck}>
      <Text>{title}</Text>
      <Text>{value.questions.length}</Text>
    </TouchableOpacity>
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
