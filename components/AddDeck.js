import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { red, blue } from "../utils/colors";

const AddDeck = (props) => {
  console.log("AddDeck props", props);
  const { dispatch, navigation } = props;

  const [deckName, setDeckName] = useState("");

  const submitDeck = () => {
    dispatch(addDeck(deckName));

    // save to storage the new deck

    // routes to the created deck
    navigation.navigate("Deck", { title: deckName });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDeckName(text)}
        value={deckName}
        placeholder="Deck Name"
      />

      <TextButton
        onPress={submitDeck}
        style={[
          deckName === "" ? styles.disabled : styles.enabled,
          styles.button,
        ]}
        disabled={deckName === ""}
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
  disabled: {
    backgroundColor: red,
  },
  enabled: {
    backgroundColor: blue,
  },
});
