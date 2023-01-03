import { StyleSheet } from "react-native";

export const todoItemStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    paddingLeft: 20,
    paddingTop: 6,
    paddingRight: 20,
    paddingBottom: 6,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#9fa8da",
    marginBottom: 3,
    marginTop: 3,
    borderRadius: 8,
    flexDirection: "row",
  },
  text: {
    textTransform: "uppercase",
    fontFamily: "Noteworthy",
    letterSpacing: 1,
  },
  icon: {
    fontSize: 30,
    color: "#3f51b5",
  },
});
