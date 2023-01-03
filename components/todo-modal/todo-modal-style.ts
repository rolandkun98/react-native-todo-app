import { StyleSheet } from "react-native";

export const todoModalStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "center",
    height: "100%",
    backgroundColor: "#283593",
  },
  textInput: {
    height: 50,
    width: "80%",
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: "Noteworthy",
    letterSpacing: 1,
  },
  buttonContainer: {
    height: 110,
    justifyContent: "space-between",
  },
});
