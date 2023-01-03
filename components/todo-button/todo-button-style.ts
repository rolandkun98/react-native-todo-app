import { StyleSheet } from "react-native";

export const todoButtonStyles = StyleSheet.create({
  pressable: {
    padding: 8,
    borderRadius: 8,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9fa8da",
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "Noteworthy",
  },
});
