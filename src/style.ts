import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9caad6",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 25,
    padding: 5,
    fontWeight: "bold",
  },
  header: {
    fontSize: 50,
    margin: 10,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  textInput: {
    backgroundColor: "#2597d9",
    fontSize: 25,
    padding: 15,
    margin: 15,
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  button: {
    padding: 5,
    borderWidth: 3,
    margin: 15,
    backgroundColor: "#c1cad4",
    borderRadius: 6,
    borderColor: "#323336",
  }
});
