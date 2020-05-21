import React from "react";
import { View, TextInput } from "react-native";
import { TextButton } from "./TextButton";

export const AddDeck = (props) => {
  const { deckName } = props;
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
        onChangeText={(text) => console.log(text)}
        value={deckName}
        placeholder="Deck Name"
      />

      <TextButton onPress={() => alert("Create Deck")} style={{ padding: 10 }}>
        Submit
      </TextButton>
    </View>
  );
};
