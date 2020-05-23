import React, { useState, useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";

const Quiz = (props) => {
  console.log("Quiz props:", props);
  const {
    navigation,
    card,
    title,
    totalCardNumber,
    cardPosition,
    score,
  } = props;

  const { question, answer } = card;

  const [showAnswer, setShowAnswer] = useState(false);

  useLayoutEffect(() => {
    setShowAnswer(false);
  }, [card]);

  const goToNextCard = (guess) => {
    if (cardPosition < totalCardNumber) {
      navigation.navigate("Quiz", {
        title,
        cardIndex: cardPosition,
        score: guess ? score + 1 : score,
      });
    }
  };

  return (
    <View>
      <Text>
        {cardPosition}/{totalCardNumber}
      </Text>
      <Text>{score}</Text>
      <Text>{question}</Text>

      {showAnswer ? (
        <Text>{answer}</Text>
      ) : (
        <Text onPress={() => setShowAnswer(true)}>
          See answer (flips the card)
        </Text>
      )}

      <TextButton onPress={() => goToNextCard(true)} style={{ padding: 10 }}>
        Correct
      </TextButton>

      <TextButton onPress={() => goToNextCard(false)} style={{ padding: 10 }}>
        Incorrect
      </TextButton>
    </View>
  );
};

const mapStateToProps = (state, { route }) => {
  const { cardIndex, title, score } = route.params;

  const card = state[title].questions[cardIndex];
  const totalCardNumber = state[title].questions.length;

  return {
    card,
    title,
    totalCardNumber,
    cardPosition: cardIndex + 1,
    score,
  };
};

export const ConnectedQuiz = connect(mapStateToProps)(Quiz);
