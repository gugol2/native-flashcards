import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { TextButton } from "./TextButton";

export const AddCard = (props) => {
  console.log("AddCard props", props);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setQuestion(text)}
        value={question}
        placeholder="Question"
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setAnswer(text)}
        value={answer}
        placeholder="Answer"
      />
      <TextButton
        onPress={() => alert(`Submit ${question} and ${answer}`)}
        style={{ padding: 10 }}
        disabled={question === "" || answer === ""}
      >
        Submit
      </TextButton>
    </View>
  );
};
