import React from "react";
import { View, Text } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";
import { removeDeck } from "../actions";

const Deck = (props) => {
  console.log("Deck props", props);

  const { dispatch } = props;

  const { deck, navigation } = props;
  const { title, questions } = deck;

  const goToAddCard = () => {
    navigation.navigate("AddCard", { title });
  };

  const startQuiz = () => {
    navigation.navigate("Quiz");
  };

  const deleteDeck = () => {
    // dispach removeDeck action
    dispatch(removeDeck(title));

    // update asyncStorage

    // Go back to Decks
    navigation.navigate("Decks");
  };

  if (!deck.title) {
    return null;
  }

  return (
    <View>
      <Text>{title}</Text>
      <Text>{`${questions.length} cards`}</Text>
      <TextButton onPress={goToAddCard} style={{ padding: 10 }}>
        Add Card
      </TextButton>
      <TextButton onPress={startQuiz} style={{ padding: 10 }}>
        Start Quiz
      </TextButton>
      <TextButton onPress={deleteDeck} style={{ padding: 10 }}>
        Delete Deck
      </TextButton>
    </View>
  );
};

const mapStateToProps = (state, { route }) => {
  const { title } = route.params;

  return {
    deck: state[title] || {},
  };
};

export const ConnectedDeck = connect(mapStateToProps)(Deck);
