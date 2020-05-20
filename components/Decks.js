import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchDeckResults } from "../utils/api";
import { AppLoading } from "expo";

export const Decks = (props) => {
  console.log("props for Decks", props);

  const [decks, setDecks] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchDeckResults().then((decksFromStorage) => {
      console.log("decksFromStorage", decksFromStorage);
      setDecks(decksFromStorage);
      setReady(true);
    });
  }, []);

  if (!ready) {
    return <AppLoading />;
  }

  return (
    <View>
      {/* <Text>{JSON.stringify(decks)}</Text> */}

      {Object.entries(decks).map(([key, value]) => (
        <View key={key}>
          <Text>{key}</Text>
          <Text>{value.questions.length}</Text>
        </View>
      ))}
    </View>
  );
};
