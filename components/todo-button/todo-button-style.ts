import { StyleSheet } from "react-native";
import { colors, fontFamilies } from "../../utils/style-vars";

export const todoButtonStyles = StyleSheet.create({
  pressable: {
    padding: 8,
    borderRadius: 8,
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: fontFamilies.primary,
  },
});
