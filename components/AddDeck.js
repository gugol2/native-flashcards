import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { saveDeckToStorage } from "../utils/api";

const AddDeck = ({ dispatch, navigation }) => {
  const [title, setTitle] = useState("");

  const submitDeck = () => {
    dispatch(addDeck(title));

    // Save Deck to "DB"
    saveDeckToStorage(title);

    // routes to the created deck
    navigation.navigate("Deck", { title });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setTitle(text)}
        value={title}
        placeholder="Deck Name"
      />

      <TextButton
        onPress={submitDeck}
        style={{ padding: 24 }}
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
    justifyContent: "space-between",
    margin: 8,
  },
  textInput: {
    height: 48,
    borderColor: "gray",
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,
  },
});
