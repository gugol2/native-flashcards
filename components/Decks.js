import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchDeckResults } from "../utils/api";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";

const Decks = (props) => {
  console.log("props for Decks", props);
  const { dispatch, decks } = props;

  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchDeckResults().then((decksFromStorage) => {
      console.log("decksFromStorage", decksFromStorage);
      dispatch(receiveDecks(decksFromStorage));
      setReady(true);
    });
  }, []);

  if (!ready) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
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

const mapStateToProps = (state) => {
  return {
    decks: state,
  };
};

export const ConnectedDecks = connect(mapStateToProps)(Decks);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
