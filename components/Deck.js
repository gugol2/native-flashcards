import React from "react";
import { View, Text } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";

const Deck = (props) => {
  console.log("Deck props", props);

  const { deck, navigation } = props;
  const { title, questions } = deck;

  const goToAddCard = () => {
    navigation.navigate("AddCard", { title });
  };

  return (
    <View>
      <Text>{title}</Text>
      <Text>{`${questions.length} cards`}</Text>
      <TextButton onPress={goToAddCard} style={{ padding: 10 }}>
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

const mapStateToProps = (state, { route }) => {
  const { title } = route.params;

  return {
    deck: state[title],
  };
};

export const ConnectedDeck = connect(mapStateToProps)(Deck);
