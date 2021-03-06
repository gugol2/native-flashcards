import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import { ConnectedDecks } from "../components/Decks";
import { ConnectedAddDeck } from "../components/AddDeck";

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
        component={ConnectedAddDeck}
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
    case "AddDeck":
      return "Add a deck to your deck list";
  }
}
