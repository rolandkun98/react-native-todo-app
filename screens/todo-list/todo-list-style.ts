import { StyleSheet } from "react-native";
import { colors } from "../../utils/style-vars";

export const todoListStyles = StyleSheet.create({
  separator: {
    marginTop: 16,
    width: "80%",
    height: 3,
    backgroundColor: colors.secondary,
    borderRadius: 8,
  },
});
