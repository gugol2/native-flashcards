import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { purple } from "../utils/colors";

export const TextButton = ({ children, onPress, style = {}, ...rest }) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  reset: {
    textAlign: "center",
    color: purple,
  },
});
