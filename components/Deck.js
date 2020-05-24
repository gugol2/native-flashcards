import React, { useRef, useEffect } from "react";
import { Text, Animated } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";
import { removeDeck } from "../actions";
import { removeDeckFromStorage } from "../utils/api";

const Deck = (props) => {
  console.log("Deck props", props);

  const { deck, navigation, dispatch } = props;
  const { title, questions } = deck;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
    }).start();
  }, []);

  const goToAddCard = () => {
    navigation.navigate("AddCard", { title });
  };

  const startQuiz = () => {
    if (questions.length) {
      navigation.navigate("Quiz", {
        title,
        cardIndex: 0,
        score: 0,
      });
    } else {
      navigation.navigate("Message", {
        message:
          "Sorry you cannot take this quiz because there are no cards in the deck",
      });
    }
  };

  const deleteDeck = () => {
    // dispach removeDeck action
    dispatch(removeDeck(title));

    // remove the deck from the DB
    removeDeckFromStorage(title);

    // Go back to Decks
    navigation.navigate("Decks");
  };

  if (!deck.title) {
    return null;
  }

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      <Text>{title}</Text>
      <Text>{`${questions.length} cards`}</Text>
      <TextButton onPress={goToAddCard} style={{ padding: 24 }}>
        Add Card
      </TextButton>
      <TextButton onPress={startQuiz} style={{ padding: 24 }}>
        Start Quiz
      </TextButton>
      <TextButton onPress={deleteDeck} style={{ padding: 24 }}>
        Delete Deck
      </TextButton>
    </Animated.View>
  );
};

const mapStateToProps = (state, { route }) => {
  const { title } = route.params;

  return {
    deck: state[title] || {},
  };
};

export const ConnectedDeck = connect(mapStateToProps)(Deck);
