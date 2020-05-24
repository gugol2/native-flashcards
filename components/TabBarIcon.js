import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

import { tabIconSelected, tabIconDefault } from "../constants/colors";

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? tabIconSelected : tabIconDefault}
    />
  );
}
