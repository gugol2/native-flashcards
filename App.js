import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

import { createStore } from "redux";
import { decks } from "./reducers";
import { Provider } from "react-redux";
import { buildComposeEnhancers } from "./middleware/composeEnhancers";
import { ConnectedDeck } from "./components/Deck";
import { ConnectedAddCard } from "./components/AddCard";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  const store = createStore(
    decks,
    /* preloadedState, */
    buildComposeEnhancers()
  );

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          {/* <NavigationContainer linking={LinkingConfiguration}> */}
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
              <Stack.Screen
                name="Deck"
                component={ConnectedDeck}
                options={({ route }) => ({ title: route.params.title })}
              />
              <Stack.Screen name="AddCard" component={ConnectedAddCard} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
