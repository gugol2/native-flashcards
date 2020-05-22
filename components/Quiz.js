import React from "react";
import { View, TextInput, Text } from "react-native";
import { TextButton } from "./TextButton";

export const Quiz = (props) => {
  const {
    totalCardNumber = 3,
    cardNumber = 2,
    question = "Who is the best programmer in the world?",
  } = props;
  return (
    <View>
      <Text>
        {totalCardNumber}/{cardNumber}
      </Text>
      <Text>{question}</Text>

      <Text onPress={() => alert("Flip the card!!")}>
        Answer (flips the card)
      </Text>

      <TextButton
        onPress={() => alert("Correct chosen")}
        style={{ padding: 10 }}
      >
        Correct
      </TextButton>

      <TextButton
        onPress={() => alert("Incorrect chosen")}
        style={{ padding: 10 }}
      >
        Incorrect
      </TextButton>
    </View>
  );
};
