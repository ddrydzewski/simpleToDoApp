import { StyleSheet } from "react-native";

export const taskStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a1b2f7",
    margin: 5,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: "#102785",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  testText: {
    padding: 15,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
