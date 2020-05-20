import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchDeckResults } from "../utils/api";

export const Decks = (props) => {
  console.log("props for Decks", props);

  const [state, setState] = useState({});

  useEffect(() => {
    fetchDeckResults().then((decks) => {
      console.log("decks", decks);
      setState(decks);
    });
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(state)}</Text>
    </View>
  );
};
