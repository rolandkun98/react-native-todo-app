import { StyleSheet } from "react-native";
import { colors, fontFamilies } from "../../utils/style-vars";

export const todoTitleStyles = StyleSheet.create({
  title: {
    fontSize: 32,
    textTransform: "uppercase",
    fontFamily: fontFamilies.primary,
    marginBottom: 16,
    color: colors.secondary,
  },
});
