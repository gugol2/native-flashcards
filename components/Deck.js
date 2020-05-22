import React from "react";
import { View, Text } from "react-native";
import { TextButton } from "./TextButton";

export const Deck = (props) => {
  console.log("props", props);

  const { route } = props;
  const { title } = route.params;
  const cardNumber = 0;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{`${cardNumber} cards`}</Text>
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
