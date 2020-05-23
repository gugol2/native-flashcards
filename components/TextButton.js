import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { purple, red, blue } from "../utils/colors";

export const TextButton = ({ children, onPress, style = {}, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text
        style={[
          styles.reset,
          style,
          disabled ? styles.disabled : styles.enabled,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  reset: {
    textAlign: "center",
    color: purple,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
  },

  disabled: {
    backgroundColor: red,
  },
  enabled: {
    backgroundColor: blue,
  },
});
