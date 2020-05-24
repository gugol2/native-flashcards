import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { TextButton } from "./TextButton";
import { addCardToDeck } from "../actions";
import { connect } from "react-redux";
import { addCardToDeckInStorage } from "../utils/persistenceAPI";

const AddCard = ({ dispatch, title, navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const submitCard = () => {
    const card = {
      question,
      answer,
    };

    // update store
    dispatch(addCardToDeck(title, card));

    // add the new card to the deck in the DB
    addCardToDeckInStorage(title, card);

    // Go to Deck
    navigation.navigate("Deck", { title });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setQuestion(text)}
          value={question}
          placeholder="Question"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setAnswer(text)}
          value={answer}
          placeholder="Answer"
        />
      </View>
      <TextButton
        onPress={submitCard}
        style={{ padding: 24 }}
        disabled={question === "" || answer === ""}
      >
        Submit
      </TextButton>
    </View>
  );
};

const mapStateToProps = (state, { route }) => {
  const { title } = route.params;

  return {
    title,
  };
};

export const ConnectedAddCard = connect(mapStateToProps)(AddCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 8,
  },
  textInput: {
    height: 48,
    borderColor: "gray",
    borderWidth: 1,
    padding: 4,
    marginBottom: 8,
    borderRadius: 5,
  },
});
