import { StyleSheet } from "react-native";
import { colors, fontFamilies } from "../../utils/style-vars";

export const todoModalStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: "center",
    height: "100%",
    backgroundColor: colors.tertiary,
  },
  textInput: {
    height: 50,
    width: "80%",
    backgroundColor: colors.light,
    marginBottom: 16,
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: fontFamilies.primary,
    letterSpacing: 1,
  },
  buttonContainer: {
    height: 110,
    justifyContent: "space-between",
  },
});
