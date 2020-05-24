import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { purple, red, blue, lightPurp } from "../utils/colors";

export const TextButton = ({ children, onPress, style = {}, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text
        style={[
          styles.button,
          disabled ? styles.disabled : styles.enabled,
          style,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    color: purple,
    marginBottom: 8,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },

  disabled: {
    opacity: 0.4,
    backgroundColor: "indianred",
  },
  enabled: {
    backgroundColor: "aliceblue",
    opacity: 1,
  },
});
