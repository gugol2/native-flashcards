import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { saveDeckTitle } from "../utils/api";

const AddDeck = (props) => {
  console.log("AddDeck props", props);
  const { dispatch, navigation } = props;

  const [title, setTitle] = useState("");

  const submitDeck = () => {
    dispatch(addDeck(title));

    // Save Deck to "DB"
    saveDeckTitle({ title });

    // routes to the created deck
    navigation.navigate("Deck", { title });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
        placeholder="Deck Name"
      />

      <TextButton
        onPress={submitDeck}
        style={styles.button}
        disabled={title === ""}
      >
        Submit
      </TextButton>
    </View>
  );
};

export const ConnectedAddDeck = connect()(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 4,
  },
  button: {
    margin: 30,
  },
});
