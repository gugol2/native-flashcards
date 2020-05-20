import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { fetchDeckResults } from "../utils/api";

export const Decks = (props) => {
  console.log("props for Decks", props);

  useEffect(() => {
    fetchDeckResults();
  }, []);

  return (
    <View>
      <Text>Veamos</Text>
    </View>
  );
};
