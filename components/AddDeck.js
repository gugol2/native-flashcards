import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { TextButton } from "./TextButton";
import { connect } from "react-redux";
import { addDeck } from "../actions";

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
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          margin: 16,
          padding: 4,
        }}
        onChangeText={(text) => setDeckName(text)}
        value={deckName}
        placeholder="Deck Name"
      />

      <TextButton onPress={submitDeck} style={{ padding: 10 }}>
        Submit
      </TextButton>
    </View>
  );
};

export const ConnectedAddDeck = connect()(AddDeck);
