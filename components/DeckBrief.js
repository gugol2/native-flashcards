import React from "react";
import { View, Text } from "react-native";

export const DeckBrief = ({ title, value }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{value.questions.length}</Text>
    </View>
  );
};
