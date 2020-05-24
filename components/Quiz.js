import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";
import {
  clearLocalNotification,
  setLocalNotification,
} from "../utils/notificationHelper";

const Quiz = ({
  navigation,
  card,
  title,
  totalCardNumber,
  score,
  cardPosition,
}) => {
  const { question, answer } = card;

  const [showAnswer, setShowAnswer] = useState(false);
  const [quizIsFinished, setQuizIsFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  useLayoutEffect(() => {
    setShowAnswer(false);
    setQuizIsFinished(false);
  }, [cardPosition]);

  const goToNextCard = (guess) => {
    const updatedScore = guess ? score + 1 : score;

    if (cardPosition < totalCardNumber) {
      navigation.navigate("Quiz", {
        title,
        cardIndex: cardPosition,
        score: updatedScore,
      });
    } else {
      setQuizIsFinished(true);
      setFinalScore(updatedScore);

      // clear local notification
      clearLocalNotification().then(setLocalNotification);
    }
  };

  const navigateBackToDeck = () => {
    navigation.goBack();
  };

  const restartQuiz = () => {
    navigation.navigate("Quiz", {
      title,
      cardIndex: 0,
      score: 0,
    });
  };

  if (quizIsFinished) {
    return (
      <View style={styles.containerSolved}>
        <View>
          <Text style={[styles.questionAnswerText, { alignSelf: "center" }]}>
            Total Score: {finalScore}
          </Text>
        </View>

        <TextButton onPress={navigateBackToDeck} style={{ padding: 16 }}>
          Back to Deck
        </TextButton>

        <TextButton onPress={restartQuiz} style={{ padding: 16 }}>
          Restart Quiz
        </TextButton>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>
        {cardPosition}/{totalCardNumber}
      </Text>

      {showAnswer ? (
        <View>
          <Text style={styles.questionAnswerText}>{answer}</Text>

          <TextButton
            onPress={() => setShowAnswer(false)}
            style={{ backgroundColor: "lightgreen", padding: 4 }}
          >
            See Question
          </TextButton>
        </View>
      ) : (
        <View>
          <Text style={styles.questionAnswerText}>{question}</Text>
          <TextButton
            onPress={() => setShowAnswer(true)}
            style={{ backgroundColor: "lightpink", padding: 4 }}
          >
            See Answer
          </TextButton>
        </View>
      )}

      <View>
        <TextButton onPress={() => goToNextCard(true)} style={{ padding: 24 }}>
          Correct
        </TextButton>

        <TextButton onPress={() => goToNextCard(false)} style={{ padding: 24 }}>
          Incorrect
        </TextButton>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 8,
  },
  containerSolved: {
    flex: 1,
    justifyContent: "space-around",
    margin: 8,
  },
  questionAnswerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 8,
  },
});
