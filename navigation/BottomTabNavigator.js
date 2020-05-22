import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import { ConnectedDecks } from "../components/Decks";
import { Deck } from "../components/Deck";
import { AddCard } from "../components/AddCard";
import { AddDeck } from "../components/AddDeck";
import { Quiz } from "../components/Quiz";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Decks";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Decks"
        component={ConnectedDecks}
        options={{
          title: "Decks",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-list-box" />
          ),
        }}
      />
      <BottomTab.Screen
        name="AddDeck"
        component={AddDeck}
        options={{
          title: "Add Deck",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-add-circle" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Decks":
      return "Deck list";
    case "Add Deck":
      return "Add a deck to your decks";
  }
}
