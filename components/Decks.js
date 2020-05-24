import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchDeckResults } from "../utils/api";
import { AppLoading } from "expo";
import { connect } from "react-redux";
import { receiveDecks } from "../actions";
import { DeckBrief } from "./DeckBrief";
import { Message } from "./Message";

const Decks = ({ dispatch, decks, navigation }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchDeckResults().then((decksFromStorage) => {
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

      {Object.entries(decks).length ? (
        Object.entries(decks).map(([title, value]) => (
          <DeckBrief
            key={title}
            title={title}
            value={value}
            navigation={navigation}
          />
        ))
      ) : (
        <Message messageProp="There are no decks. Please create a deck to start." />
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    decks: state || {},
  };
};

export const ConnectedDecks = connect(mapStateToProps)(Decks);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
