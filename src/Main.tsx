import React, { useState } from "react";
import {
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Task from "./components/Task/Task";
import { styles } from "./style";

export const Main = () => {
  const [tasks, setTasks] = useState(["zadanie1", "zadanie2"]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks((items) => [...items, task]);
    setTask("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((item) => item !== id));
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={"#212121"} />
      <View style={styles.container}>
        <Text style={styles.header}>ToDo App</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setTask}
          value={task}
          placeholder="Your Task"
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
        <ScrollView>
          {tasks.map((item, index) => (
            <TouchableOpacity onPress={() => deleteTask(item.toString())}>
              <Task key={index.toString()} taskName={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};
