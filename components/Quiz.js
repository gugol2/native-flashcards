import React from "react";
import { View, TextInput, Text } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";

const Quiz = (props) => {
  console.log("Quiz props:", props);
  const { navigation, card, title, totalCardNumber, cardPosition } = props;

  const { question, answer } = card;

  const goToNextCard = () => {
    if (cardPosition < totalCardNumber) {
      navigation.navigate("Quiz", {
        title,
        cardIndex: cardPosition,
      });
    }
  };

  return (
    <View>
      <Text>
        {cardPosition}/{totalCardNumber}
      </Text>
      <Text>{question}</Text>

      <Text onPress={() => alert("Flip the card!!")}>
        {answer} (flips the card)
      </Text>

      <TextButton onPress={goToNextCard} style={{ padding: 10 }}>
        Correct
      </TextButton>

      <TextButton onPress={goToNextCard} style={{ padding: 10 }}>
        Incorrect
      </TextButton>
    </View>
  );
};

const mapStateToProps = (state, { route }) => {
  debugger;
  const { cardIndex, title } = route.params;

  const card = state[title].questions[cardIndex];
  const totalCardNumber = state[title].questions.length;

  return {
    card,
    title,
    totalCardNumber,
    cardPosition: cardIndex + 1,
  };
};

export const ConnectedQuiz = connect(mapStateToProps)(Quiz);
