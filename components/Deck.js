import React from "react";
import { View, Text } from "react-native";
import { TextButton } from "./TextButton";

export const Deck = (props) => {
  const { deckname = "DeckName", cardNumber = "3 cards" } = props;
  return (
    <View>
      <Text>{deckname}</Text>
      <Text>{cardNumber}</Text>
      <TextButton onPress={() => alert("Add Card")} style={{ padding: 10 }}>
        Add Card
      </TextButton>
      <TextButton onPress={() => alert("Start Quiz")} style={{ padding: 10 }}>
        Start Quiz
      </TextButton>
      <TextButton onPress={() => alert("Delete Deck")} style={{ padding: 10 }}>
        Delete Deck
      </TextButton>
    </View>
  );
};
