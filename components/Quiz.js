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

      {showAnswer ? (
        <View>
          <Text>{answer}</Text>
          <TextButton onPress={() => setShowAnswer(false)}>
            See Question
          </TextButton>
        </View>
      ) : (
        <View>
          <Text>{question}</Text>
          <TextButton onPress={() => setShowAnswer(true)}>
            See Answer
          </TextButton>
        </View>
      )}

      <TextButton
        onPress={() => goToNextCard(true)}
        style={{ padding: 10 }}
        disabled={cardPosition === totalCardNumber}
      >
        Correct
      </TextButton>

      <TextButton
        onPress={() => goToNextCard(false)}
        style={{ padding: 10 }}
        disabled={cardPosition === totalCardNumber}
      >
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
