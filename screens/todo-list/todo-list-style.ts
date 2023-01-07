import { StyleSheet } from "react-native";
import { colors } from "../../utils/style-vars";

export const todoListStyles = (orientation: "portrait" | "landscape") => {
  return StyleSheet.create({
    separator: {
      marginTop: orientation === "portrait" ? 16 : 0,
      width: orientation === "portrait" ? "80%" : 3,
      height: orientation === "portrait" ? 3 : "80%",
      backgroundColor: colors.secondary,
      borderRadius: 8,
    },
    headerContainer: {
      flex: orientation === "portrait" ? 0 : 1,
      alignItems: "center",
    },
  });
};
