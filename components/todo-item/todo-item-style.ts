import { StyleSheet } from "react-native";
import { colors, fontFamilies } from "../../utils/style-vars";

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
    backgroundColor: colors.secondary,
    marginBottom: 3,
    marginTop: 3,
    borderRadius: 8,
    flexDirection: "row",
  },
  text: {
    textTransform: "uppercase",
    fontFamily: fontFamilies.primary,
    letterSpacing: 1,
  },
  icon: {
    fontSize: 30,
    color: colors.primary,
  },
});
