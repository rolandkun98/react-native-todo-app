import { StyleSheet } from "react-native";

export const screensWrapperStyles = (orientation: "portrait" | "landscape") => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: orientation === "portrait" ? 50 : 0,
      flexDirection: orientation === "portrait" ? "column" : "row",
    },
  });
};
