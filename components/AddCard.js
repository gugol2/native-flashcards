import React from "react";
import { View, TextInput } from "react-native";
import { TextButton } from "./TextButton";

export const AddCard = (props) => {
  const { questionValue, answerValue } = props;
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => console.log(text)}
        value={questionValue}
        placeholder="Question"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => console.log(text)}
        value={answerValue}
        placeholder="Answer"
      />
      <TextButton onPress={() => alert("Submit")} style={{ padding: 10 }}>
        Submit
      </TextButton>
    </View>
  );
};
