import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Message = (props) => {
  const { route } = props;

  const {
    message = "Default Message to test the styles like position, margins, colors and so on",
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },

  message: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
