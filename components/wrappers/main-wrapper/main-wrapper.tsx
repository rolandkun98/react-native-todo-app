import { View } from "react-native";
import { ReactNode } from "react";
import { mainWrapperStyles } from "./main-wrapper-style";

export const MainWrapper = ({ children }: { children: ReactNode }) => {
  return <View style={mainWrapperStyles.container}>{children}</View>;
};
