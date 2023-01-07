import { StyleSheet } from "react-native";
import { colors, fontFamilies } from "../../utils/style-vars";

export const todoModalStyles = (orientation: "portrait" | "landscape") => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      paddingTop: orientation === "portrait" ? 50 : 0,
      alignItems: orientation === "portrait" ? "center" : "center",
      justifyContent: orientation === "portrait" ? "flex-start" : "center",
      backgroundColor: colors.tertiary,
      flexDirection: orientation === "portrait" ? "column" : "row",
    },
    headerContainer: {
      flex: orientation === "portrait" ? 0 : 1,
      width: orientation === "portrait" ? "100%" : "50%",
      height: orientation === "portrait" ? "auto" : 130,
      alignItems: "center",
      justifyContent:
        orientation === "portrait" ? "flex-start" : "space-between",
    },
    textInput: {
      height: 50,
      width: "80%",
      backgroundColor: colors.light,
      marginBottom: orientation === "portrait" ? 16 : 0,
      borderRadius: 8,
      paddingLeft: 16,
      paddingRight: 16,
      fontFamily: fontFamilies.primary,
      letterSpacing: 1,
    },
    buttonContainer: {
      flex: orientation === "portrait" ? 0 : 1,
      height: orientation === "portrait" ? 110 : 130,
      justifyContent: "space-between",
      alignItems: orientation === "portrait" ? "flex-start" : "center",
    },
  });
};
