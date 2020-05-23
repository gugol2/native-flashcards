import React from "react";
import { View, Text } from "react-native";

export const Message = (props) => {
  const { route } = props;

  const {
    message = "Default Message to test the styles like position, margins, colors and so on",
  } = route.params;

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};
