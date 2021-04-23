import React from "react";
import { Text, View } from "react-native";
import { taskStyle } from "./style";

interface IProps {
    taskName: string
}

const Task: React.FC<IProps> = ({taskName}) => {
  return (
    <View style={taskStyle.container}>
      <Text style={taskStyle.testText}>{taskName}</Text>
    </View>
  );
};

export default Task;
