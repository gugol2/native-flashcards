import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Message = ({ route, messageProp }) => {
  const messageToShow = (route && route.params.message) || messageProp;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{messageToShow}</Text>
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
